import React, { Component } from 'react';
import { initScrollReveal } from './Work.js';

class Work extends Component {
  componentDidMount() {
    initScrollReveal();
  }

  render() {
    const timelineData = [
      { title: 'Founding', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
      { title: 'Growth Expansion', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
      { title: 'Major Achievements', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
      { title: 'Recent Milestones', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    ];

    return (
      <section className="py-24">
        <div className="container mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-indigo-200 h-full"></div>

          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <div key={index} className="relative mb-16">
              {/* Connector Dot */}
              <div className="w-8 h-8 bg-indigo-500 rounded-full absolute left-1/2 transform -translate-x-1/2 top-6"></div>

              {/* Timeline Content */}
              <div
                className={`timeline-content bg-white shadow-lg rounded-lg p-6 w-[45%] ${
                  index % 2 === 0 ? 'ml-auto js--fadeInLeft' : 'mr-auto js--fadeInRight'
                } relative`}
              >
                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Work;
