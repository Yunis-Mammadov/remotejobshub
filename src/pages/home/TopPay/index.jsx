import React from 'react'
import "../../../styles/HomeJobs.scss"
import { Link } from 'react-router-dom'
import Card from '../Card'

const TopPay = () => {
    return (
        <div className='homeJobs'>
            <div className='homeJobsBtn'>
                <h2>Top Pay Jobs</h2>
                <Link to={'/jobs'} >
                    <button>See All Jobs</button>
                </Link>
            </div>
            <Card type="topPay" />
            {/* <Card />
            <Card /> */}
        </div>
    )
}

export default TopPay
