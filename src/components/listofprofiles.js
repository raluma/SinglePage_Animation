import React from "react";
import { dataProfiles } from "../services/dataProfiles";
import Profile from "./profile";

export default function ListOfProfiles() {
    return (
        <>
            {dataProfiles.map((data, key) => {
                return (
                    <Profile key={key} 
                    src={data.img} 
                    name={data.name} 
                    job={data.job}/>
                )
            })
            }
        </>
    )
}