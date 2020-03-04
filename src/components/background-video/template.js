import { s } from "./";

const template = document.createElement("template");

template.innerHTML = `
	<video
		autoplay loop muted playsinline
		class="${s.wrapper}">
		<source 
			src="" 
			type="video/mp4"
		>
	</video>
`;

export default template;