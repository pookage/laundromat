import { s } from "./";

const template = document.createElement("template");

template.innerHTML = `
	<button
		class="${s.wrapper}"
		role="switch"
		aria-controls="video__background"
		aria-checked="true"
	>
		Unmute
	</button>
`;

export default template;