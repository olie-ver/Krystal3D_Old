import Image from "next/image"

import style from "./TeamMember.module.css";

export const TeamMember = ({name, selfText, description}: {name: string, selfText: string, description: string}) => {
    return (<>
            <div key={name}>
                <div className={style.Container}>
                    <Image
                    src={`/Team/${name}/${name}.jpeg`}
                    alt={"member.name"}
                    fill
                    className={style.Image}
                    />
                </div>
                <h3 className={style.SelfText}><strong>{selfText}</strong></h3>
                <p className={style.Description}>{description}</p>
            </div>
            </>
            );
}