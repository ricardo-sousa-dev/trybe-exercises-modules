import React, { Component } from 'react';
import pata from '../pataDog.jpg';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
          
    };
    // this.cronometerOnOffSwitch = this.cronometerOnOffSwitch.bind(this);
    this.changeTime = this.changeTime.bind(this);
  }

  changeTime({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  // cronometerOnOffSwitch() {
  //   const { showCronometer, minutes, seconds } = this.state;

  //   if (showCronometer) {
  //     const ONE_SECOND = 1000;
  //     const ONE_MINUTE = 60000;
      
  //     this.cronometerMinutes = setInterval(() => {
  //       this.setState(prevState => ({ 
  //         seconds: prevState.seconds - 1 
  //       }));
  //       console.log('SEGUNDO rodando!');
  //     }, ONE_SECOND);

  //     this.cronometerSeconds = setInterval(() => {
  //       this.setState(prevState => ({ 
  //         minutes: prevState.minutes - 1 
  //       }));
  //       console.log('MINUTO rodando!');
  //     }, ONE_MINUTE);

  //     this.setState({cronometro: <div className='cronometro'><h1>Min: {minutes} Seg: {seconds}</h1></div>})
  //   } else {
  //     clearInterval(this.cronometerSeconds);
  //     clearInterval(this.cronometerMinutes);
  //     this.setState({ seconds: 0,
  //     minutes: 0});
  //   }
  // }

  componentDidUpdate(prevState) {
    const { hour, minutes } = this.state;

    const limitTime = hour * 3600 + minutes * 60;

    if (prevState.seconds === limitTime) {
      this.setState({ seconds: 0 });
      clearInterval(this.cronometerInterval);
    }
  }

  render() {
    const { cronometro, showCronometer} = this.state;
    const divInputs = (
      <div className='divInputs'>
        <img className='pata' src={pata} alt='' />
        <div className='inputs'>
          <label htmlFor=''>
            Minutos:{' '}
            <input
              type='number'
              min='1'
              className='minutes'
              name='minutes'
              onChange={this.changeTime}
            />
          </label>
          <label htmlFor=''>
            Segundos:{' '}
            <input
              type='number'
              min='1'
              className='seconds'
              name='seconds'
              onChange={this.changeTime}
            />
          </label>
        </div>
      </div>
    );

    return (
      <div className='timer'>
        <section>{ !showCronometer ? divInputs : cronometro }</section>
      </div>
    );
  }
}

export default Clock;
