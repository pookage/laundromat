import { s } from "./";

const template = document.createElement("template");

template.innerHTML = `
	<video
		autoplay muted playsinline webkit-playsinline
		class="${s.wrapper}">
	</video>
`;

export default template;