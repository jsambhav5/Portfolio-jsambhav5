"use client";
import {
	Header,
	Hero,
	About,
	Experience,
	Skills,
	Projects,
	ContactMe,
} from "@/components";

export default function Home() {
	return (
		<div className="bg-[rgb(36,36,36)]  text-white h-screen snap-y snap-mandatory z-0 overflow-y-scroll overflow-x-hidden">
			<Header />
			<section id="hero" className="snap-start">
				<Hero />
			</section>
			<section id="about" className="snap-center">
				<About />
			</section>
			<section id="experience" className="snap-start">
				<Experience />
			</section>
			<section id="skills" className="snap-center">
				<Skills />
			</section>
			<section id="projects" className="snap-center">
				<Projects />
			</section>
			<section id="contactMe" className="snap-center">
				<ContactMe />
			</section>
		</div>
	);
}
