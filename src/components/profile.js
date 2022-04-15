import React from "react";
import importAll from '../services/img';

const images = importAll(require.context('../services/img/profilePictures', false, /\.(png|jpe?g|svg|jpg)$/));

export default function Profile({ src, name, job }) {   

    return <div className="picture">
        <img className="picture-img" src={images[src]} />
        <div className="picture-box">
            <p className="picture-name">{name}</p>
            <p className="picture-job">{job}</p>
        </div>
    </div>
}