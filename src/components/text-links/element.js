import { s, template, item } from "./";

class TextLinks extends HTMLElement {

	// dom
	#ELEMENT;
	#ITEM;
	#WRAPPER;


	// LIFECYCLE JAZZ
	// -------------------------
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

			// create a new list item from the template
			const linkItem = document.importNode(item.content, true);
			const link = linkItem.querySelector(`.${s.link}`);

			// capitalise the first letter of the label
			const [ firstLetter, ...otherLetters ] = name;
			const label = `${firstLetter.toUpperCase()}${[ ...otherLetters ].join("")}`

			if(!value) link.setAttribute("aria-disabled", "true");

			link.href = value;
			link.innerText = label;

			fragment.appendChild(linkItem);
		}

		return fragment;
	}// generateLinkItems

};// TextLinks

export default TextLinks;