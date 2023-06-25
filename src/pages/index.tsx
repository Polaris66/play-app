import Head from "next/head";
import React from "react";

import { Button } from "@gurisandhu/cpd-ui/atoms";
import { Alert } from "@gurisandhu/cpd-ui/molecules";

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
