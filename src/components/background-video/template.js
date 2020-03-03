import { s } from "./";

const template = document.createElement("template");

template.innerHTML = `
	<video
		playsinline autoplay muted 
		class="${s.wrapper}">
	</video>
`;

export default template;