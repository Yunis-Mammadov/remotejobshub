import React, { useEffect, useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { getAllJobs } from "../../../api/request";
import "../../../styles/Card.scss";

const Card = ({ type }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllJobs()
            .then(data => {
                setJobs(data);
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, []);

    if (loading) {
        return <p>Loading jobs...</p>;
    }

    // Şərtlərə uyğun olaraq ilk 3 işi seç
    let filteredJobs = [];

    if (type === "newJobs") {
        filteredJobs = jobs.filter(job => job.is_remote_work === 1).slice(0, 3);
    } else if (type === "popularJobs") {
        filteredJobs = [...jobs]
            .sort((a, b) => (b.number_of_opening || 0) - (a.number_of_opening || 0))
            .slice(0, 3);
    } else if (type === "topPay") {
        filteredJobs = [...jobs]
            .sort((a, b) => (b.salary_to || 0) - (a.salary_to || 0))
            .slice(0, 3);
    }

    return (
        <div>
            {filteredJobs.map((job) => (
                <div className={`newJobsCard ${type}`} key={job.id}>
                    <div className="newJobsTitle">
                        <p>{job.updated_at || "N/A"}</p>
                        <StarBorderIcon sx={{color:"gold"}} />
                    </div>
                    <div className="cardDetail">
                        <div className="jobsName">
                            <img
                                src={job.companyLogo || "https://via.placeholder.com/150"}
                                alt={job.title}
                            />
                            <div>
                                <h3>{job.title}</h3>
                                <p className="subText">{job.company}</p>
                            </div>
                        </div>
                        <div className="jobsCondition">
                            <p>
                                <b>{job.salary_from}$ - {job.salary_to}$</b>/yearly
                            </p>
                            <div className="conditionIcons">
                                <div>
                                    <HomeIcon className="homeIcons" />
                                    <p className="subText">{job.is_remote_work === 1 ? "Remote" : "On-site"}</p>
                                </div>
                                <div>
                                    <LocationOnIcon className="homeIcons" />
                                    <p className="subText">{job.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
