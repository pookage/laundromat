import { template } from "./";

export default class MailchimpSignup extends HTMLElement {

	// dom
	#ELEMENT;

	// LIFECYCLE JAZZ
	// --------------------------
	constructor(){
		super();

		const clone = this.#ELEMENT = document.importNode(template.content, true);
	}// constructor

	connectedCallback(){
		this.appendChild(this.#ELEMENT);
	}// connectedCallback

}; // MailchimpSignup
