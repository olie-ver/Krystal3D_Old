//may need to fix the other pages before I can properly view this one
//Maybe change from a whole page, turn it into just an error message?
//  or maybe have the "smaller" version as another export?
"use client";
import Image from "next/image";
import { Component, type JSX } from "react";
// import { TopBanner } from "@/Components/TopBanner";
// import { Gear } from "@/Components/Gear";
// import { SettingMenu } from "@/Components/Settings";
// import { NavButton, NavButtonContainer } from "@/Components/NavButton";
import { Display } from "@/public/Types";
import { getDisplay } from "@/public/UniversalFunctions";

export class InternalServerError extends Component<
  { error: string },
  { display: Display }
> {
  constructor(props: { error: string }) {
    super(props);
    this.state = { display: "Midnight" };
  }

  componentDidMount(): void {
    const display = getDisplay();
    document.body.className = display;
    this.setState({ display: display });
  }

  render = (): JSX.Element => {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          alignItems: "center",
        }}
      >
        <div style={{ width: "25vw", height: "25vw", position: "fixed" }}>
          <Image
            src={`/SVGs/${this.state.display}/404.svg`}
            id="404"
            fill
            alt="InternalServerError Image"
            data-img
            priority
          ></Image>
        </div>
        <h4
          style={{
            top: "75vh",
            position: "fixed",
            fontSize: "2.5vw",
            fontFamily: "Tilt Prism",
            textAlign: "center",
            color: "var(--krystal-text)",
          }}
        >
          {this.props.error} <br />
          We are sorry for the inconvenience!
        </h4>
        {/* <NavButtonContainer>
                    <NavButton navTo = {"Browse"} nav = {"/Browse"}/>
                    <NavButton navTo = {"3D Models"} nav = {"/Models"}/>
                    <NavButton navTo = {"Materials"} nav = {"/Materials"}/>
                    <NavButton navTo = {"Prints"} nav = {"/Prints"}/>
                </NavButtonContainer>
                <SettingMenu/>
                <Gear src = {this.state.display}/>
                <TopBanner homeMode={this.state.display}/> */}
      </div>
    );
  };
}

export default InternalServerError;
