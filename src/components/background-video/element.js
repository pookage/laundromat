import * as UTILS from "SHARED/utils.js";
import { s, template } from "./";

class BackgroundVideo extends HTMLElement {

	// dom
	#ELEMENT;
	#VIDEO;

	// state
	#STATE;

	// config
	#INITIAL_STATE = {
		"portrait-small": "",
		"portrait-large": "",
		"landscape-small": "",
		"landscape-large": "",
		"poster-small": "",
		"poster-large": ""
	};
	#PORTRAIT_LARGE_MIN  = 720;
	#LANDSCAPE_LARGE_MIN = 1080;



	// LIFECYCLE JAZZ
	// -------------------------------------
	constructor(){
		super();

		// scope binding
		this.updateVideo          = this.updateVideo.bind(this);
		this.debouncedVideoUpdate = UTILS.debounce.bind(this, this.updateVideo);

		// dom stuff
		const clone = this.#ELEMENT = document.importNode(template.content, true);
		const video = this.#VIDEO   = clone.querySelector(`.${s.wrapper}`);
		const state = this.#STATE   = { ...this.#INITIAL_STATE };

		// add event listeners
		window.addEventListener("resize", this.debouncedVideoUpdate);
	}// constructor

	connectedCallback(){
		this.appendChild(this.#ELEMENT);
	}// connectedCallback

	disconnectedCallback(){
		window.removeEventListener("resize", this.debouncedVideoUpdate);
	}// disconnectedCallback 

	attributeChangedCallback(attribute, prev, next){

		const isRemoved = next === null;

		switch(attribute){
			case "id":
			case "poster":
			case "autoplay":
			case "muted":
			case "loop":
				if(isRemoved) this.#VIDEO.removeAttribute(attribute);
				else          this.#VIDEO.setAttribute(attribute, next);
				break;

			case "playsinline":
				if(isRemoved){
					this.#VIDEO.removeAttribute("playsinline");
					this.#VIDEO.removeAttribute("webkit-playsinline");
				} else {
					this.#VIDEO.setAttribute("playsinline", "");
					this.#VIDEO.setAttribute("webkit-playsinline", "");
				}
				break;

			case "portrait-small":
			case "portrait-large":
			case "landscape-small":
			case "landscape-large":
			case "poster-small":
			case "poster-large":
				this.#STATE[attribute] = next;
				this.updateVideo();
				break;
		}
	}// attributeChangedCallback

	static get observedAttributes(){
		return [ 
			"id", 
			"autoplay",
			"playsinline",
			"muted",
			"loop",
			"portrait-small",
			"portrait-large",
			"landscape-small",
			"landscape-large",
			"poster-small",
			"poster-large"
		];
	}// get observedAttributes


	// EVENT HANDLER
	// ----------------------------------
	updateVideo(){

		console.log("update video!")

		const { 
			innerWidth, 
			innerHeight 
		} = window;

		const isPortrait = innerWidth < innerHeight;

		// lookup best resolution for screen dimensions
		let resolution;
		let posterResolution;
		if(isPortrait){
			if(innerWidth < this.#PORTRAIT_LARGE_MIN){
				resolution = "portrait-small";
			} else {
				resolution = "portrait-large";
			}
			posterResolution = "poster-small";
		} else {
			if(innerWidth < this.#LANDSCAPE_LARGE_MIN){
				resolution = "landscape-small";
			} else {
				resolution = "landscape-large";
			}
			posterResolution = "poster-large";
		}

		// apply correct src based on resolution if changed
		const src    = this.#STATE[resolution];
		const poster = this.#STATE[posterResolution]
		if(this.#VIDEO.src !== src){
			this.#VIDEO.setAttribute("src", src);
			this.#VIDEO.setAttribute("poster", poster);
		}
	}// updateVideo

};// BackgroundVideo

export default BackgroundVideo;