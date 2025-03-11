import React from 'react'
import "../../../styles/HomeJobs.scss"
import { Link } from 'react-router-dom'
import Card from '../Card'

const PopularJobs = () => {
    return (
        <div className='homeJobs'>
            <div className='homeJobsBtn'>
                <h2>Popular Jobs</h2>
                <Link to={'/jobs'} >
                    <button>See All Jobs</button>
                </Link>
            </div>
             <Card type={"popularJobs"} />
        </div>
    );
};


export default PopularJobs
