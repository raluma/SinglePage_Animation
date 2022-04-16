import React, { useState } from "react";
import importAll from '../services/img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const images = importAll(require.context('../services/img/profilePictures', false, /\.(png|jpe?g|svg|jpg)$/));

export default function Profile({ src, name, job }) { 
    const [stage, setStage] = useState(false);

    return <div className="picture">
                <img className={stage ? "picture-img-view" : "picture-img" } 
                src={images[src]} onClick={() => setStage(!stage)} />

                <div className="picture-box">
                    <div className="picture-info">
                        <p className="picture-name">{name}</p>
                        <p className="picture-job">{job}</p>
                    </div>

                    <div className="picture-icon">
                        <FontAwesomeIcon icon={faTwitter} 
                        className="icon-tw"/>
                        <FontAwesomeIcon icon={faLinkedin}
                        className="icon-linkdn" />
                    </div>
                </div>
            </div>
}