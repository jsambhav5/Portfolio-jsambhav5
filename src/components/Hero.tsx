import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
	const [text, count] = useTypewriter({
		words: [
			"Hi, The Name's Sambhav Jain",
			"<GuyWhoLovesFrontend/>",
			"but-loves-backend-more.ts",
		],
		loop: true,
		delaySpeed: 3000,
	});
	return (
		<div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />
			<Image
				alt="logo"
				src="/images/me.jpg"
				height={200}
				width={200}
				className="relative rounded-full h-32 w-32 mx-auto mb-5"
			/>
			<h2 className="text-sm lg:text-l uppercase text-gray-500 pb-2 tracking-[15px] mb-5">
				Software Engineer
			</h2>
			<h1 className="text-xl lg:text-2xl font-semibold px-10">
				<span>{text}</span>
				<Cursor cursorColor="#F7AB0A" />
			</h1>
		</div>
	);
};

export default Hero;
