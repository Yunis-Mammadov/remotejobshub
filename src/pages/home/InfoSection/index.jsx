import React from 'react'
import '../../../styles/InfoSection.scss'

const InfoSection = () => {
  return (
    <div className='parentInfoSection'>
      <div className='bgImg'></div>
      <div className="steps-container">
        <div className="steps">
          <div className="step">
            <h1>1</h1>
            <h2>Create a profile</h2>
            <p>Define your preferences of where and how you want to work in your next job.</p>
          </div>
          <div className="step">
            <h1>2</h1>
            <h2>Improve it with AI</h2>
            <p>
              Join an AI interview to improve your job interview skills and know what you can add to your profile to
              stand out to employers.
            </p>
          </div>
          <div className="step">
            <h1>3</h1>
            <h2>Be found</h2>
            <p>Make your profile visible to employers and get matched to opportunities.</p>
          </div>
        </div>
        <div className="cta-section">
          <h3>One profile. One interview. Thousands of opportunities.</h3>
          <button className="cta-button">Create profile</button>
        </div>
      </div>
    </div>
  )
}

export default InfoSection
