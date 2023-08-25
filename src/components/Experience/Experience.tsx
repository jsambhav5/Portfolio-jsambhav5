import React from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from "@/components";
import experiences from "./Experience.json";
type Props = {};

const Experience = (props: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="flex flex-col text-left md:text-left md:flex-row relative h-screen max-w-5xl px-10 justify-evenly mx-auto items-center overflow-hidden"
		>
			<h3 className="pl-5 absolute top-24 uppercase tracking-[20px] text-xl text-gray-500">
				Experience
			</h3>

			<div className="w-full h-full flex space-x-5 p-10 snap-x snap-mandatory">
				{/* <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory"> */}
				{experiences.map((experience) => (
					<ExperienceCard data={experience} />
				))}
			</div>
		</motion.div>
	);
};

export default Experience;
