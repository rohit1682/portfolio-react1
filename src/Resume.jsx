import React from 'react';
import Header from './sections/Header/Header.jsx';
import {header} from '../src/assets/data.js'
import './resume.css'

class Resume extends React.Component {

  render() {

    return (
      <main className="overflow-x-hidden relative">
        <section className="grid-bg">
          <Header content={header}/>
        </section>
      </main>
    )
  }
}

export default Resume
