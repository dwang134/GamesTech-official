import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import styles from '../styles/Particle.module.scss'

const Particle:React.FC = () => {

    const customInit = async (main:Engine) => {
        // await loadTrianglesPreset(engine);
        await loadFull(main);
      };
    
      const particlesLoaded = async(container?: Container)=> {
        console.log(container);
      };
    
      const options = {
        preset: "triangles",
      };

  return (
    <Particles
    id={styles.tsparticles}
    init={customInit}
    // loaded={particlesLoaded}
    options={{
      fpsLimit: 120,
      backgroundMode: {
        enable: true
      },
      background: {
        color: "#000"
      },
      particles: {
        // canvas borders bounce factors
        bounce: {
          horizontal: {
            value: 1.01
          },
          vertical: {
            value: 1.01
          }
        },
        color: {
          value: ""
        },
        links: {
          color: "#f6f6f6",
          distance: 110,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        collisions: {
          enable: true,
          // collisions bounce factors
          bounce: {
            horizontal: {
              value: 1.5
            },
            vertical: {
              value: 1.5
            }
          }
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 1,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 80
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: "circle"
        },
        size: {
          random: true,
          value: 2
        }
      },
      detectRetina: true
    }}
  />
  )
}

export default Particle