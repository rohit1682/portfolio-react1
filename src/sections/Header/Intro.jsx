import React from 'react';
import Typed from 'typed.js';

import '../../dist/Header/Intro.css'

class Intro extends React.Component {
  componentDidMount() {
    const options = {
      strings: [this.props.content.name, ...this.props.content.tags],
      typeSpeed: 90,
      backSpeed: 30,
      loop: true,
    };

    this.typed = new Typed('.typed', options);
  }

  componentWillUnmount() {
    if (this.typed) {
      this.typed.destroy();
    }
  }

  render() {

    const { company, job, city } = this.props.content; 

    return (
      <section className='grid md:grid-cols-5 py-25'>

        <div className='col-span-2'>
          <img src={ this.props.content.intro } alt="" />
        </div>

        <div className="flex flex-col justify-center gap-5 align-middle py-5 w-full col-span-3">

          <p className="w-full flex justify-center text-[40px]">
            Hi there! I'm<span className="typed px-2 text-purple-600"></span> 
          </p>

          <div className="flex flex-col md:flex-row justify-evenly space-y-3 md:space-y-0">
            <a
              href="#"
              className="text-[15px] item rounded-2xl hover:cursor-pointer transition-transform duration-300 hover:scale-110"
            >
              {company}
            </a>
            <a
              href="#"
              className="text-[15px] item rounded-2xl hover:cursor-pointer transition-transform duration-300 hover:scale-110"
            >
              {job}
            </a>
            <a
              href="#"
              className="text-[15px] item rounded-2xl hover:cursor-pointer transition-transform duration-300 hover:scale-110"
            >
              {city}
            </a>
          </div>

        </div>

      </section>
    );
  }
}

export default Intro;
