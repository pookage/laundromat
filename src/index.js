import "SHARED/reset.scss";
import "SHARED/global.scss";
import "SHARED/colors.scss";
import "SHARED/fonts.scss";

import components from "./components/";

for(let component of components){
	for(let [ name, Definition ] of Object.entries(component)){
		window.customElements.define(name, Definition);
	}
}