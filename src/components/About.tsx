import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
	return (
		<div className="flex flex-col text-center md:text-left md:flex-row relative h-screen max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-xl text-gray-500">
				About
			</h3>
			<motion.img
				initial={{ x: -200, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				src="/images/me2.jpg"
				className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 2xl:w-[350px] 2xl:h-[400px]"
			></motion.img>
		</div>
	);
};

export default About;
