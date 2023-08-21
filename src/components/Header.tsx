import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
	return (
		<header className="bg-[rgb(36,36,36)] sticky top-0 pt-1 flex items-start justify-between max-w-7xl mx-auto z-20 ">
			<motion.div
				initial={{ x: -500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className="flex flex-row items-center"
			>
				<SocialIcon
					style={{ height: "40px" }}
					url="https://github.com/jsambhav5"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					style={{ height: "40px" }}
					url="https://linkedin.com/in/jsambhav5"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					style={{ height: "40px" }}
					url="http://jsambhav5.com"
					fgColor="gray"
					bgColor="transparent"
				/>
			</motion.div>

			<motion.div
				initial={{ x: 500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className="flex flex-row items-center"
			>
				<SocialIcon
					style={{ height: "40px" }}
					className="cursor-pointer"
					network="email"
					fgColor="gray"
					bgColor="transparent"
				/>
				<p className="uppercase hidden md:inline-flex text-sm text-gray-40">
					Get in Touch
				</p>
			</motion.div>
		</header>
	);
};

export default Header;
