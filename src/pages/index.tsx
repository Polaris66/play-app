import Head from "next/head";
import React from "react";

import { Button } from "@gurisandhu/play-ui/atoms";
import { Alert } from "@gurisandhu/play-ui/molecules";

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
			</Head>
			<main>
				Hello Hello{" "}
				<div>
					<Button>Button</Button>
					<Alert title="Alert" />
				</div>
			</main>
		</>
	);
}
