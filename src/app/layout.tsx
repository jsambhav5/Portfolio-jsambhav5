import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%s | jsambhav5",
		default: "jsambhav5",
	},
	description: "jsambhav5 Home Page",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="shortcut icon" href="\icons\favicon.ico" />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
