import { s } from "./";

const template = document.createElement("template");

template.innerHTML = `
	<div class="${s.wrapper}">
		<h1 class="${s.title}"></h1>
		<nav class="${s.links}">
			<text-links
				listen="//linktr.ee/laundromat"
				live="https://www.songkick.com/artists/10085310-laundromat-uk"
				store="">
			</text-links>
			<social-links
				instagram="//instagram.com/laundromat__/"
				facebook="//facebook.com/laundromatmusica/"
				twitter="//twitter.com/LAUNDROMAT__">
			</social-links>
		</nav>
		<background-video
			id="video__background"
			loop
			portrait-small="assets/video/LAUNDROMAT_SITE_LOOP_480V.mp4"
			portrait-large="assets/video/LAUNDROMAT_SITE_LOOP_720V.mp4"
			landscape-small="assets/video/LAUNDROMAT_SITE_LOOP_720.mp4"
			landscape-large="assets/video/LAUNDROMAT_SITE_LOOP_1080.mp4"
			poster-small="assets/images/poster__portrait.jpg"
			poster-large="assets/images/poster__landscape.jpg">
		</background-video>
		<mute-toggle
			active="true">
		</mute-toggle>
	</div>
`;

export default template;