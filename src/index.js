import "SHARED/reset.scss";
import "SHARED/global.scss";
import "SHARED/fonts.scss";

import components from "./components/";

for(let component of components){
	console.log(components)
	for(let [ name, Definition ] of Object.entries(component)){
		try {
			window.customElements.define(name, Definition);
		} catch(e){
			// already defined
		}
	}
}