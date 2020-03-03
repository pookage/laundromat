import { s, template } from "./";

class LandingPage extends HTMLElement {

	// dom
	#ELEMENT;
	#WRAPPER;
	#TITLE;

	constructor(){
		super();

		const clone   = this.#ELEMENT = document.importNode(template.content, true);
		const wrapper = this.#WRAPPER = clone.querySelector(`.${s.wrapper}`);
		const title   = this.#TITLE   = clone.querySelector(`.${s.title}`);
	}// constructor

	connectedCallback(){
		this.appendChild(this.#ELEMENT);
	}// connectedCallback

	attributeChangedCallback(attribute, prev, next){
		switch(attribute){
			case "heading":
				this.#TITLE.textContent = next;
				break
		}
	}// attributeChangedCallback

	static get observedAttributes(){
		return [ "heading" ];
	}// get observedAttributes

}; // LandingPage

export default LandingPage;