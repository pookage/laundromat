import { s } from "./";

const template = document.createElement("template");

template.innerHTML = `
	<video
		muted playsinline webkit-playsinline
		class="${s.wrapper}">
	</video>
`;

export default template;