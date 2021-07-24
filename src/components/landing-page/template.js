import { s } from "./";

const template = document.createElement("template");

template.innerHTML = `
	<div class="${s.wrapper}">
		<div class="${s.headings}">
			<h1 class="${s.title}">
				Laundromat
			</h1>
			<h2 class="${s.subtitle}">
				A Universal Facepalm
			</h2>
		</div>
		<text-links
			class="${s.externals}"
			listen="//linktr.ee/laundromat"
			live="//songkick.com/artists/10085310-laundromat-uk"
			store="//laundromatmusica.bandcamp.com/merch"
		></text-links>
		<mailchimp-signup
			class="${s.mailchimp}"
		></mailchimp-signup>
		<social-links
			class="${s.socials}"
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
		<mute-toggle
			class="${s.mute}"
		></mute-toggle>

	</div>
`;

export default template;
