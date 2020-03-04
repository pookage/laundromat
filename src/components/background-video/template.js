import { s } from "./";

const template = document.createElement("template");

template.innerHTML = `
	<video
		autoplay loop muted playsinline
		class="${s.wrapper}">
		<source 
			src="assets/video/LAUNDROMAT_SITE_LOOP_480V.mp4" 
			type="video/mp4"
		>
	</video>
`;

export default template;