import React from 'react'
import "../../../styles/HomeJobs.scss"
import { Link } from 'react-router-dom'
import Card from '../Card'

const NewJobs = () => {
    return (
        <div className='homeJobs'>
            <div className='homeJobsBtn'>
                <h2>New Jobs</h2>
                <Link to={'/jobs'} >
                    <button>See All Jobs</button>
                </Link>
            </div>
            <Card type="newJobs" />
            {/* <Card />
            <Card /> */}
        </div>
    )
}

export default NewJobs
