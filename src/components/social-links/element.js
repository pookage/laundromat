import { s, template, item } from "./";

class SocialLinks extends HTMLElement {

	// dom
	#ELEMENT;
	#ITEM;
	#WRAPPER;

	constructor(){
		super();

		// dom stuff
		const clone   = this.#ELEMENT = document.importNode(template.content, true);
		const wrapper = this.#WRAPPER = clone.querySelector(`.${s.wrapper}`);
		const items   = this.generateLinkItems(this.attributes);

		wrapper.appendChild(items);

	}// constructor

	connectedCallback(){
		this.appendChild(this.#ELEMENT);
	}// connectedCallback


	// UTILS
	// -----------------------
	generateLinkItems(attributes){
		const fragment = document.createDocumentFragment();

		for(let { name, value } of attributes){

			console.log({ name, value })

			// generate clone and get dom elements
			const clone    = document.importNode(item.content, true);
			const linkItem = clone.querySelector(`.${s.item}`);
			const link     = clone.querySelector(`.${s.link}`);

			// add an identifying class name
			linkItem.classList.add(s[name]);

			// capitalise the first letter of the label
			const [ firstLetter, ...otherLetters ] = name;
			const label = `${firstLetter.toUpperCase()}${[ ...otherLetters ].join("")}`

			// set the label as an aria-label instead of a child so that we can use an icon instead
			link.setAttribute("aria-label", `${label}.`);

			// disable it if there's no url
			if(!value) link.setAttribute("aria-disabled", "true");
			// otherwise attach the url as a href
			else link.href = value;

			fragment.appendChild(clone);
		}

		return fragment;
	}// generateLinkItems

};// SocialLinks

export default SocialLinks;