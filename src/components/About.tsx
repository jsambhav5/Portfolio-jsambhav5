import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="flex flex-col text-center md:text-left md:flex-row relative h-screen max-w-7xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-xl text-gray-500 pl-5">
				About
			</h3>
			<motion.img
				initial={{ x: -200, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				src="/images/me2.jpg"
				className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 2xl:w-[350px] 2xl:h-[400px]"
			/>
			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-xl md:text-2xl lg:text-3xl font-semibold">
					A{" "}
					<span className="underline decoration-[#F7AB0A]/50">
						little
					</span>{" "}
					Background About Me
				</h4>
				<p className="text-m md:text-l lg:text-xl">
					I am Sambhav Jain and I am a Software Engineer. I am B.Tech
					in Computer Science and Engineering and I am a Full-Stack
					Developer working on MERN Stack. I am also a DSA enthusiast.
					I am a Mulesoft Certified Developer, currently working as a
					Software Engineer at Apisero Inc.
				</p>
			</div>
		</motion.div>
	);
};

export default About;
