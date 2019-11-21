import React from "react";
import { storiesOf } from "@storybook/react";

import Article from "../../components/article";
import ReadMe from "./arial-baskerville.readme.md";

storiesOf("Articles", module)
	.addParameters({
		readme: {
			// Show readme before story
			content: ReadMe,
			// Show readme at the addons panel
			sidebar: ReadMe
		}
	})
	.add("Arial & Baskerville", () => <Article className="arial-baskerville" />);
