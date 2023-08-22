import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Skills = (props: Props) => {
	return (
		<div className="flex flex-col text-center md:text-left md:flex-row relative h-screen max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="pl-5 absolute top-24 uppercase tracking-[20px] text-xl text-gray-500">
				Skills
			</h3>
		</div>
	);
};

export default Skills;
