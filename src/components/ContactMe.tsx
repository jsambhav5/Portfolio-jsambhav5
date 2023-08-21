import React from "react";

type Props = {};

const ContactMe = (props: Props) => {
	return (
		<div className="flex flex-col text-center md:text-left md:flex-row relative h-screen max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-xl text-gray-500">
				Contact Me
			</h3>
		</div>
	);
};

export default ContactMe;
