import React from 'react';
import './profile.css';

class Profile extends React.Component {
  render() {
    <section className='grid md:grid-cols-3 md:px-10 lg:px-20 xl:px-40'>
      
      <img src={this.props.content.profile} className='rounded-4xl' alt="Profile Picture" />

      <p>
        "Hi, I'm Rohit Ghosh, a Software Developer at EPAM Systems with a strong foundation in Computer Science and Engineering. I have experience in full-stack development, machine learning, and building scalable, user-centric applications using technologies like ReactJS, Django, and Node.js. My journey includes impactful internships at HP India and Salesforce, alongside certifications in AI, GenAI, and full-stack development. As a former Project Coordinator for Enactus KIIT, I've also demonstrated leadership by managing cross-functional teams and delivering successful initiatives. I'm passionate about solving real-world problems through innovative and collaborative solutions.
      </p>

      <div className='flex flex-col justify-evenly'>
        
      </div>

    </section>
  }
}

export default Profile;