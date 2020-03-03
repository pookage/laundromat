import state from "SHARED/state.js";

import { s, template } from "./";

class MuteToggle extends HTMLElement {

	// dom
	#ELEMENT;
	#BUTTON;


	// LIFECYCLE JAZZ
	// -------------------------
	constructor(){
		super();

		// scope binding
		this.toggleMute = this.toggleMute.bind(this);

		// dom
		const clone  = this.#ELEMENT = document.importNode(template.content, true);
		const button = this.#BUTTON = clone.querySelector(`.${s.wrapper}`);

		// add event listeners
		button.addEventListener("click", this.toggleMute);
	}// constructor

	connectedCallback(){
		this.appendChild(this.#ELEMENT);
	}// connectedCallback


	// EVENT HANDLING
	// -------------------------
	toggleMute(event){
		event.preventDefault();

		const muted = !state.muted;
		const label = muted ? "Unmute" : "Mute";

		state.muted = muted;

		this.#BUTTON.innerText = label;
	}// toggleMute

}; // MuteToggle

export default MuteToggle;