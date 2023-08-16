"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
	return (
		<div className="bg-[rgb(36,36,36)]  text-white h-screen snap-y snap-mandatory overflow-hidden z-0">
			<Header />
			<section id="hero" className="snap-center ">
				<Hero />
			</section>
		</div>
	);
}
