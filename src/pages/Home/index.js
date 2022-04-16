import React from "react";
import ListOfProfiles from "../../components/listofprofiles";
import { motion } from "framer-motion";

export default function Home() {
    return <div className="flex flex-col h-full w-full bg-gray-900 cursor-default">
        <section className="px-16 mt-10">
            <motion.h2 className="text-white hover:text-blue-300 
            cursor-pointer font-bold text-2xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 4,
                ease: 'easeInOut',
                delay: 0.2,
                type: 'spring'
            }}>Meet our team</motion.h2>

            <motion.p className="text-gray-400 text-xl mt-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                  duration: 4,
                  ease: 'easeInOut',
                  delay: 0.2,
                  type: 'spring'
              }}>
                Ornare sagittis, suspendisse in hendrerit quis.
                Sed dui aliquet lectus sit pretium egestas vel mattis
                neque.
            </motion.p>
        </section>

        <motion.section className="flex card my-8 justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
            duration: 4,
            ease: 'easeInOut',
            delay: 0.2,
            type: 'spring'
        }}>
            <ListOfProfiles  />
        </motion.section> 
    </div>
}