import React from 'react';
import '../../dist/Header/Profile.css';

class Profile extends React.Component {
  render() {

    return (
      <section className='wrapper py-5 md:px-10 lg:px-20 xl:px-40'>

        <div className='box grid md:grid-cols-3 gap-10 p-5'>

          <img src={this.props.content.profile} className='col-span-1 rounded-4xl w-70 flex place-items-center' alt="Profile Picture" />
          
          <div className='col-span-2 flex flex-col justify-evenly'>

            <p className='flex place-items-center text-[13px]'>
              {this.props.content.description}
            </p>
            
            <div className='flex flex-col w-full gap-5'>
              <p className='flex flex-start text-[25px]'>Lets Connect!</p>
              <div className='flex md:flex-row place-items-center gap-10'>
                <img src={this.props.content.email} alt="email" className="w-10 h-10 hover:cursor-pointer transition-transform duration-300 hover:scale-110" />
                <img src={this.props.content.call} alt="call" className="w-10 h-10 hover:cursor-pointer transition-transform duration-300 hover:scale-110" />
                <img src={this.props.content.linkedin} alt="linkedin" className="w-10 h-10 hover:cursor-pointer transition-transform duration-300 hover:scale-110" />
                <img src={this.props.content.location} alt="location" className="w-10 h-10 hover:cursor-pointer transition-transform duration-300 hover:scale-110" />
              </div>
            </div>

          </div>

        </div>
        

      </section>
    );
  }
}

export default Profile;