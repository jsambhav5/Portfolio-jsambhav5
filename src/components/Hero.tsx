import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const Hero = (props: Props) => {
	const [text, count] = useTypewriter({
		words: [
			"Hi, The Name's Sambhav Jain",
			"<GuyWhoLovesFrontend/>",
			"but-loves-backend-more.ts",
		],
	});
	return <div>Hero</div>;
};

export default Hero;
