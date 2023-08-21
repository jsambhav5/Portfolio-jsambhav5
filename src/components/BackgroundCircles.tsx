import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				scale: [1, 2, 3, 2, 1],
				opacity: [0.2, 0.4, 0.6, 0.8, 1.0],
				borderRadius: ["20%", "40%", "60%", "80%", "100%"],
			}}
			transition={{ duration: 2.5 }}
			className="relative flex justify-center items-center"
		>
			<div className="absolute border border-[#434343] rounded-full h-[200px] w-[200px] mt-52 animate-ping "></div>
			<div className="absolute border border-[#434343] rounded-full h-[300px] w-[300px] mt-52 animate-ping "></div>
			<div className="absolute border border-[#434343] rounded-full h-[500px] w-[500px] mt-52 animate-ping "></div>
			<div className="absolute border border-[#434343] rounded-full h-[650px] w-[650px] mt-52 animate-ping "></div>
			<div className="absolute border border-[#F7AB0A] rounded-full h-[400px] w-[400px] md:h-[550px] md:w-[550px] lg:h-[500px] lg:w-[500px] mt-52 animate-pulse opacity-20"></div>
		</motion.div>
	);
};

export default BackgroundCircles;
