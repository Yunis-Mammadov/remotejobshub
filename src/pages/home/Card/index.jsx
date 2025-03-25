import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import '../../../styles/Card.scss';
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <>
            <div className='cardParent'>
                <div className='cardTitle'>
                    <div>
                        <p>1 hours ago</p>
                        <p>experience</p>
                        <p>remote-europe</p>
                    </div>
                    <div>
                        <StarOutlineIcon />
                    </div>
                </div>
                <Link to={'/jobs'} className="cardLink">
                    <div className='cardDetail'>
                        <div className='cardImageContainer'>
                            <div className='cardImage'>
                                <img src="https://remote.com/jobs/_next/image?url=%2Fjobs%2F_next%2Fstatic%2Fmedia%2Fcompany-placeholder-3.1ea2c135.png&w=128&q=75" alt="" />
                            </div>
                            <div className='text' style={{
                                display: "flex",
                                justifyContent: "space-evenly",
                                flexDirection: "column",
                                color: "black"
                            }}>
                                <h3>Project Manager</h3>
                                <h4>Wildix OU</h4>
                            </div>
                        </div>
                        <div className='cardDataContainer'>
                            <div>
                                <div>
                                    <LocationOnIcon sx={{ fontSize: "22px", color: "gray" }} />
                                    <p>Europe only</p>
                                </div>
                                <div>
                                    <AccessTimeIcon sx={{ fontSize: "22px", color: "gray" }} />
                                    <p>Full-Time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>

    );
}

export default Card;
