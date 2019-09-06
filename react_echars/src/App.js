import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactEcharts from "echarts-for-react";

export default class App extends React.Component{
  getOption =()=> {
    let option = {
      title:{
        text:'�û����ж���',
        x:'center'
      },
      tooltip:{
        trigger:'axis',
      },
      xAxis:{
        data:['��һ','�ܶ�','����','����','����','����','����']
      },
      yAxis:{
        type:'value'
      },
      series:[
        {
          name:'OFO������',
          type:'line',
          data:[1000,2000,1500,3000,2000,1200,800]
        }
      ]
    };
    return option;
  };
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>

          </header>
          <div title="����ͼ��֮һ">
            <ReactEcharts option={this.getOption()} theme="Imooc" style={{height: '400px'}}/>
          </div>
        </div>

    );
  }
}

