import Image from 'next/image';
import React, { PureComponent } from 'react';
import { AreaChart, Area , Legend, ResponsiveContainer } from 'recharts';

import { FaUserAlt } from "react-icons/fa";
import {  RiMedalFill } from "react-icons/ri";
import styles from './styles.module.scss';


export function Placements () {
  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]
  return(
    <div className={styles.performanceContainer} >
      <div className={styles.performanceContent} >
        <div className={styles.buttonsContainer}>
          <button className={styles.buttonCorBlue}>
            Por data
          </button>
          <button>
            Mais bem colocado
          </button>
        </div>
      </div>
      <div className={styles.infoContainer}> 
          <div className={styles.infoBox}>
            <div className={styles.divDetail}>
              <p>332°</p>
            </div>
            <div className={styles.infoContent}>
             <div className={styles.infoUser}>
                <div>
                  <p>Fez um jogo Rápido</p>
                  <span>10 de novembro de 2020</span>
                </div>
                <div  className={styles.divUser}>
                  <FaUserAlt/>
                  <span>400</span> 
                </div>
             </div>
              <div className={styles.setsContainer}>
                <div className={styles.areaChartLinear} >
                  <AreaChart width={705} height={244} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="-0.62%" stopColor="#5A8DEE" stopOpacity={0.8}/>
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                  </AreaChart>
                </div>
                <div className={styles.setsContent}>
                  <div>
                    <p>12</p>
                    <span>Jogos</span>
                  </div>
                  <div>
                    <p>8</p>
                    <span>Vitórias</span>
                  </div>
                  <div>
                    <p>4</p>
                    <span>Derrotas</span>
                  </div>
                  <div>
                    <p>16</p>
                    <span>Sets Vencidos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}