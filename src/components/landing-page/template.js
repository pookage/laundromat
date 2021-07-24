import { s } from "./";

const template = document.createElement("template");

template.innerHTML = `
	<div class="${s.wrapper}">
		<h1 class="${s.title}"></h1>
		<nav class="${s.links}">
			<mailchimp-signup
				class="${s.mailchimp}"
			></mailchimp-signup>
			<text-links
				listen="//linktr.ee/laundromat"
				live="//songkick.com/artists/10085310-laundromat-uk"
				store="//laundromatmusica.bandcamp.com/merch"
			></text-links>
		</nav>
		<social-links
			instagram="//instagram.com/laundromat__/"
			youtube="//youtube.com/channel/UC-luAUHtpoHxTsX60_JSptg"
			twitter="//twitter.com/LAUNDROMAT__"
			facebook="//facebook.com/laundromatmusica/"
		></social-links>
		<background-video
			id="video__background"
			loop
			portrait-small="assets/video/laundromat_siteloop_480V.mp4"
			portrait-large="assets/video/laundromat_siteloop_720V.mp4"
			landscape-small="assets/video/laundromat_siteloop_720.mp4"
			landscape-large="assets/video/laundromat_siteloop_1080.mp4"
			poster-small="assets/images/poster__portrait.jpg"
			poster-large="assets/images/poster__landscape.jpg"
		></background-video>
		<mute-toggle></mute-toggle>

	</div>
`;

export default template;
