import { s } from "./";

const template = document.createElement("template");

template.innerHTML = `
	<video
		playsinline webkit-playsinline autoplay muted 
		class="${s.wrapper}">
	</video>
`;

export default template;