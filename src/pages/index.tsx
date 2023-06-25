import Head from "next/head";
import React from "react";

import { Button } from "@polaris66/play-ui/src/atoms";
import { Alert } from "@polaris66/play-ui/src/molecules";

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
