import React from "react";
import ListOfProfiles from "../../components/listofprofiles";

export default function Home() {
    return <div className="flex flex-col h-full 
    w-full bg-gray-900 cursor-default">
        <section className="px-16 mt-10">
            <h2 className="text-white hover:text-blue-300 
            cursor-pointer font-bold text-2xl">Meet our team</h2>

            <p className="text-gray-400 text-xl mt-4">
                Ornare sagittis, suspendisse in hendrerit quis.
                Sed dui aliquet lectus sit pretium egestas vel mattis
                neque.
            </p>
        </section>

        <section className="my-8 mx-auto">
            <ListOfProfiles  />
        </section> 
    </div>
}