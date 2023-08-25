import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = { data: any };

const ExperienceCard = (props: Props) => {
	return (
		<article className="justify-center flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full h-full mt-[120px] mb-[50px] lg:mt-[150px] lg:mb-[30px]  snap-center bg-[#292929] p-10 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden">
			<motion.img
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
				src={props.data.logo}
				className="rounded-full w-[70px] h-[70px]  md:w-[90px] md:h-[90px] object-cover object-top"
			/>
			<div className="px-0 md:px-10">
				<h4 className="text-3xl md:text-4xl font-light">
					{props.data.designation}
				</h4>
				<p className="text-2xl font-bold mt-1 uppercase">
					{props.data.company}
				</p>
				<div className="flex space-x-2 my-2">
					{props.data.technologies.map((technology: any) => (
						<Image
							src={technology.logo}
							alt="typescript"
							height="32"
							width="32"
							title={technology.name}
							className="h-4 w-4 md:h-7 md:w-7 lg:h-10 lg:w-10"
						/>
					))}
				</div>
				<p className="uppercase py-5 text-gray-300">
					{props.data.start} - {props.data.end}
				</p>

				<ul className="list-disc space-y-4 ml-5 text-sm lg:text-lg">
					{props.data.summary.map((summaryPoint: string) => (
						<li>{summaryPoint}</li>
					))}
				</ul>
			</div>
		</article>
	);
};

export default ExperienceCard;
