import React from "react";
import boom_1 from "../assets/boom_1.png";
import wolk_1 from "../assets/wolk_1.png";
import wolk_2 from "../assets/wolk_2.png";
import "./App.css";

// imports kampvuur

import onderKant_kampvuur from "../assets/kampvuur/onder_kantvuur.png";
import rechterKant_kampvuur from "../assets/kampvuur/rechterkant_vuur.png"
import linkerKant_kampvuur from "../assets/kampvuur/links_vuur.png"



// imports yoa 

import linker_arm_yoa from "../assets/yoa/linkerarmyoa.png";
import rechter_arm_yoa from "../assets/yoa/rechterarmyoa.png";
import middel_yoa from "../assets/yoa/middelvanyoa.png";


//vos 

import linker_poot_vos from "../assets/vos/linkerpoot.png"
import rechter_poot_vos from "../assets/vos/rechterpoot.png"
import middel_van_vos from "../assets/vos/middel_van_vos.png"




function App() {
    return (
        <div id="frame_1">
            <div id="inner_frame_1">
                <div id="boom_1_frame_1_container">
                    <img id="boom_1_frame_1_img" src={boom_1} alt="boom_1" />
                    </div>
                    <div id="boom_2_frame_1_container">
                    <img id="boom_2_frame_1_img" src={boom_1} alt="boom_1" />
                </div>
                <div id="boom_3_frame_1_container">
                    <img id="boom_3_frame_1_img" src={boom_1} alt="boom_1" />
                </div>
                <div id="wolk_1_frame_1_container">
                    <img id="wolk_1_frame_1_img" src={wolk_1} alt="wolk_1" />
                </div>
                <div id="wolk_2_frame_1_container">
                    <img id="wolk_2_frame_1_img" src={wolk_2} alt="wolk_2" />
                </div>
                <div id="kampvuur_frame_1_container">
                    <div id="onderKant_kampvuur">
                        <img id="onderKant_kampvuur_img" src={onderKant_kampvuur} alt="onderKant_kampvuur" />
                    </div>
                    <div id="rechterKant_kampvuur">
                        <img id="rechterKant_kampvuur_img" src={rechterKant_kampvuur} alt="rechterKant_kampvuur" />
                    </div>
                    <div id="linkerKant_kampvuur">
                        <img id="linkerKant_kampvuur_img" src={linkerKant_kampvuur} alt="linkerKant_kampvuur" />
                </div>
        </div>
        
        <div id="vos_frame_1_container">
                    <div id="linkerpoot_vos">
                        <img id="linkerpoot_vos_img" src={linker_poot_vos} alt="linkerpoot_vos" />
                    </div>
                    <div id="middel_van_vos">
                        <img id="middel_vos_img" src={middel_van_vos} alt="middel_vos" />
                    </div>
                    <div id="rechterpoot_vos">
                        <img id="rechterpoot_vos_img" src={rechter_poot_vos} alt="rechterpoot_vos" />
                </div>
                
            </div>
            <div id="yoa_frame_1_container">
                <div id="linker_arm_yoa">
                    <img id="linker_arm_yoa_img" src={linker_arm_yoa} alt="linker_arm_yoa" />
                </div>
                <div id="rechter_arm_yoa">
                    <img id="rechter_arm_yoa_img" src={rechter_arm_yoa} alt="rechter_arm_yoa" />
                </div>
                <div id="middel_yoa">
                    <img id="middel_yoa_img" src={middel_yoa} alt="middel_yoa" />
                </div>
            </div>
        </div>
    </div>
    );
}

export default App;