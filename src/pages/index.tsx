import Head from "next/head";
import React from "react";

import { Button } from "@polaris66/play-ui/src/atoms";

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
