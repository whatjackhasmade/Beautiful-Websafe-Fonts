import { addDecorator, configure } from "@storybook/react";
import { addReadme } from "storybook-readme";
import React from "react";
import "!style-loader!css-loader!sass-loader!../stories/styles/core.scss";

addDecorator(addReadme);

const withGlobal = cb => <React.Fragment>{cb()}</React.Fragment>;

addDecorator(withGlobal);

// automatically import all files ending in *.stories.js
configure(require.context("../stories", true, /\.stories\.js$/), module);
