import { promises as fs } from "fs";
import { TeamMember } from "@/Components/ClientComponents/TeamMember/TeamMember";
import path from "path";

let memoizedTeam: {name: string, selfText: string, description: string}[] = [];
let lastUpdate: number = Date.now();

export default async function ServerTeamMember() {
    const date = new Date(lastUpdate);
    const day = date.getDay();
    const diffToSunday = (7 - day) % 7;
    date.setDate(date.getDate() + diffToSunday);
    date.setHours(0, 0, 0, 0);
    const nextReset = date.getTime();

    const now = Date.now();

    if (memoizedTeam.length != 0 && now < nextReset) {
        console.log("returning memoized memoized team members");
        return createSuggestions(memoizedTeam);
    }

    console.log("awaiting for team members");
    let team = await getTeamMembers();
    console.log(team);
    return createSuggestions(team);
}

async function getTeamMembers() {
    try {
        const members = (await fs.readdir(path.join(process.cwd(), 'public', 'Team'))).filter((name) => !name.includes("."));

        const team = await Promise.all(
        members.map(async (member) => {
            const jsonContent = await fs.readFile(path.join(process.cwd(), 'public', 'Team', member, `${member}.json`),
                                        {encoding: "utf8"});
            const memberInfo: {selfText: string, description: string} = JSON.parse(jsonContent);
            return {name: member, selfText: memberInfo.selfText, description: memberInfo.description};
            }
        ));
        // Flatten the nested arrays
        const teamInfo = team.flat();
        console.log(teamInfo);
        return teamInfo;
    } catch {
        return [{name: "", selfText: "", description: ""}];
    }
}

function createSuggestions(members: {name: string, selfText: string, description: string}[]) {
    return members.map((member) =>(
        <TeamMember key={member.name}name={member.name} selfText={member.selfText} description={member.description}/>
    ));
}