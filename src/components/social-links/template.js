import { s } from "./";

const template = document.createElement("template");
const item     = document.createElement("template");

template.innerHTML = `
	<ul class="${s.wrapper}">
	</ul>
`;

item.innerHTML = `
	<li class="${s.item}">
		<a
			class="${s.link}"
			href="" 
			target="_blank" 
			rel="noopener"
			aria-label=""
		></a>	
	</li>
`;

export { item };
export default template;