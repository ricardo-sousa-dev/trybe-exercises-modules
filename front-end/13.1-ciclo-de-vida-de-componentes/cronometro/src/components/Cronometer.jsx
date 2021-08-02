import React, { Component } from 'react';
import Clock from './Clock';

class Cronometer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCronometer: false,
      minutes: 0,
      seconds: 60,
      cronometro: <div className='cronometro'><h1>Digite o tempo!</h1></div>,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    console.log('entrou no handle');
    this.setState((prevState) => ({showCronometer: !prevState.showCronometer}));
    const { showCronometer, minutes, seconds } = this.state;

    if (showCronometer) {
      const ONE_SECOND = 1000;
      const ONE_MINUTE = 60000;
      
      this.cronometerMinutes = setInterval(() => {
        this.setState(prevState => ({ 
          seconds: prevState.seconds - 1 
        }));
        console.log('SEGUNDO rodando!');
      }, ONE_SECOND);

      this.cronometerSeconds = setInterval(() => {
        this.setState(prevState => ({ 
          minutes: prevState.minutes - 1 
        }));
        console.log('MINUTO rodando!');
      }, ONE_MINUTE);

      this.setState({cronometro: <div className='cronometro'><h1>Min: {minutes} Seg: {seconds}</h1></div>})
    } else {
      clearInterval(this.cronometerSeconds);
      clearInterval(this.cronometerMinutes);
      this.setState({ seconds: 0,
      minutes: 0});
    }
  }

  render() {
    const { showCronometer, minutes, seconds, cronometro } = this.state;
    return (
      <div className='divCronometro'>
        <Clock showCronometer={showCronometer} cronometro={cronometro} minutes={minutes} seconds={seconds}/>

        <button type='button' onClick={this.handleChange}>
          {showCronometer ? 'Desligar cronômetro' : 'Ligar cronômetro' }
        </button>
      </div>
    );
  }
}

export default Cronometer;
