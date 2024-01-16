import React from "react";
import Particles from "react-particles-js";
import particleConfig from "./config/particleconfig";

export default function ParticleBackground() {
    return (
        <Particles params={particleConfig}></Particles>
    );
}
