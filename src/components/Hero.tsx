import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

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

			<div className="max-w-[355px] lg:max-w-[500px] z-20 items-center justify-center text-center">
				<Image
					alt="logo"
					src="/images/me.jpg"
					height={200}
					width={200}
					className="relative rounded-full h-32 w-32 mx-auto mb-5"
				/>
				<h2 className="text-sm lg:text-l uppercase text-gray-500 pb-2 tracking-[7px] lg:tracking-[15px] mb-2 lg:mb-5">
					Software Engineer
				</h2>

				<h1 className="text-l lg:text-2xl font-semibold px-10">
					<span>{text}</span>
					<Cursor cursorColor="#F7AB0A" />
				</h1>
				<div className="mb-2 mt-2">
					<Link href="#about">
						<button className="heroButton">Experience</button>
					</Link>
					<Link href="#experience">
						<button className="heroButton">About</button>
					</Link>
					<Link href="#skils">
						<button className="heroButton">Skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton">Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
