import React, { PureComponent } from 'react';
import {  AreaChart, Area , ResponsiveContainer } from 'recharts';

import Image from 'next/image';

import { BiCaretDown, BiBarChartAlt2 } from "react-icons/bi";
import {  RiMedalFill } from "react-icons/ri";
import styles from './styles.module.scss';


export function Performance () {
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
            Geral
          </button>
          <button>
            <p>em 2020</p>
            <BiCaretDown/>
          </button>
        </div>
        <div className={styles.rechartsContent}>
          <div className={styles.areaChart} >
            <div className={styles.areaChartLinear} >
              <AreaChart width={295} height={244} data={data}
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
            <div className={styles.areaChartInfo}>
              <div className={styles.InfoHeader}>
                <h1>60%</h1>
                <p>desempenho</p>
              </div>
              <div className={styles.InfoFooter}>
                <div>
                  <BiBarChartAlt2 />
                  <p>04</p>
                  <span>rankings</span>
                </div>
                <div>
                  <RiMedalFill/>
                  <p>05</p>
                  <span>torneios</span>          
                </div>
              </div>
            </div>
          </div>
          <div className={styles.linearChart} >
            <div className={styles.progressContainer}>
              <div className={styles.progress_Content}>
                <div className={styles.progress_won}>
                  <p>120</p>
                </div>
                <div className={styles.progress_lose}>
                  <p>80</p>
                </div>
              </div>
              <div>
                <p>200</p>
                <span>jogos</span>
              </div>
            </div>
            <div className={styles.progressContainer}>
              <div className={styles.progress_Content}>
                <div className={styles.progress_won}>
                  <p>100</p>
                </div>
                <div className={styles.progress_lose}>
                  <p>40</p>
                </div>
              </div>
              <div>
                <p>140</p>
                <span>jogos</span>
              </div>
            </div>
            <div className={styles.progressContainer}>
              <div className={styles.progress_Content}>
                <div className={styles.progress_won}>
                  <p>120</p>
                </div>
                <div className={styles.progress_lose}>
                  <p>80</p>
                </div>
              </div>
              <div>
                <p>200</p>
                <span>jogos</span>
              </div>
            </div>
            <div className={styles.progressContainer}>
              <div className={styles.progress_Content}>
                <div className={styles.progress_won}>
                  <p>100</p>
                </div>
                <div className={styles.progress_lose}>
                  <p>40</p>
                </div>
              </div>
              <div>
                <p>140</p>
                <span>jogos</span>
              </div>
            </div>
            <div className={styles.progressContainer}>
              <div className={styles.progress_Content}>
                <div className={styles.progress_won}>
                  <p>120</p>
                </div>
                <div className={styles.progress_lose}>
                  <p>80</p>
                </div>
              </div>
              <div>
                <p>300</p>
                <span>jogos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}