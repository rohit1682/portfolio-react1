import React from 'react';

import Header from './sections/Header/Header.jsx';
import Work from './sections/Descriptions/Work.jsx'

import {header} from '../src/assets/data.js'

import './dist/Resume.css'

class Resume extends React.Component {

  render() {

    return (
      <main className="">
        <section className="grid-bg overflow-auto">
          <Header content={header}/>
          <Work/>
        </section>
      </main>
    )
  }
}

export default Resume
