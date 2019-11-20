import React from "react";
import { storiesOf } from "@storybook/react";

import Article from "../../components/article";
import ArialReadMe from "./arial.readme.md";

storiesOf("Articles", module)
	.addParameters({
		readme: {
			// Show readme before story
			content: ArialReadMe,
			// Show readme at the addons panel
			sidebar: ArialReadMe
		}
	})
	.add("Arial", () => <Article className="arial" />);
