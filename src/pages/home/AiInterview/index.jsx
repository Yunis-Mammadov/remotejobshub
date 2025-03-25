import React from "react";
import '../../../styles/AI.scss'


const AIInterview = () => {
  return (
    <div className="ai-container">
      <div className="ai-content">
        <p className="powered">Powered by <span className="brand">αpriora</span></p>
        <h1>AI interviews to boost your profile</h1>
        <p className="description">
          Alex (AI) can provide you with feedback on your job interview skills
          and also suggest what to include in your Remote profile, to stand out to
          employers.
        </p>
        <ul>
          <li>✔ Join a video call with Alex (AI) in a 2-way natural conversation</li>
          <li>✔ After the call, Alex will provide you feedback on your interview skills and suggest what to include in your profile</li>
          <li>✔ Review your feedback and select what you want to add to your profile</li>
        </ul>
        <p className="get-started">
          Get started by creating your profile and then join a video call with Alex (AI).
        </p>
        <div className="buttons">
          <button className="create-profile">Create profile</button>
          <button className="browse-jobs">Browse jobs</button>
        </div>
      </div>
      <div className="ai-image">
        <img src="https://remote.com/jobs/_next/image?url=%2Fjobs%2F_next%2Fstatic%2Fmedia%2Flaptop-cup-vase-leaves-ai.5e569783.png&w=3840&q=75" alt="AI Interview Illustration" />
      </div>
    </div>
  );
};

export default AIInterview;
