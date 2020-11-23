import { s } from "./";

const template = document.createElement("template");

template.innerHTML = `
	<div id="mc_embed_signup">
		<form action="https://bandcamp.us3.list-manage.com/subscribe/post?u=6277de89fd0fe4e96e9f6f29e&amp;id=0be98bd4ef" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
			<div id="mc_embed_signup_scroll" class="${s.container}">
				<input 
					type="email" 
					value="" 
					name="EMAIL" 
					class="required email ${s.email}" 
					id="mce-EMAIL"
					aria-label="Email Address."
					placeholder="email address"
				/>
				<div id="mce-responses" class="clear">
					<div class="response" id="mce-error-response" style="display:none"></div>
					<div class="response" id="mce-success-response" style="display:none"></div>
				</div>
				<input 
					type="submit" 
					value="Subscribe" 
					name="subscribe" 
					id="mc-embedded-subscribe" 
					class="button ${s.subscribe}"
				>
				<div style="position: absolute; left: -5000px;" aria-hidden="true">
					<input type="text" name="b_6277de89fd0fe4e96e9f6f29e_0be98bd4ef" tabindex="-1" value="">
				</div>
			</div>
		</form>
	</div>
`;

export default template;
