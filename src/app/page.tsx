import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<Header />
			<h1 className="text-blue-500">Hi From Sambhav Jain</h1>
			<Image
				width="1000"
				height="500"
				alt="logo"
				src="/icons/jsambhav5-logo.png"
			></Image>
		</div>
	);
}
