# LAUNDROMAT

![laundromat](https://user-images.githubusercontent.com/3370135/75826661-e61c0280-5d9f-11ea-96e6-d43235ba15c4.gif)

## 1. First-Time Setup

This site requires `node` and `npm` to be installed in order to build, and uses `firebase` to deploy.

### 1.1 Installing Node on MAC

1. Open your terminal
2. Install homebrew by running `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
3. Make sure you're up-to-date by running `brew update`
4. Install Node by running `brew install node`
5. Confirm successful installation by entering `node -v` and `npm -v`, which should both give version numbers if successful

### 1.2 Installing Firebase

1. Open your terminal
2. Run `npm install -g firebase-tools`
3. Once complete, log-in to firebase by running `firebase login`

### 1.3 Clone the Repo

1. Open your terminal
2. Copy the code by running `git clone https://github.com/pookage/laundromat-site.git`
3. navigate into the folder with `cd laundromat-site`

## 2. Making Changes

### 2.1 The Components

The site is made up of multiple smaller 'components' that can be found in `/src/components/`:

- **landing-page**
is the general component that renders everything on the landing page, and what renders all the other elements.

- **background-video**
is the component in-charge of the background-video behaviour; it handles autoplay and stretching of the video etc.  
	- To change the *source* of the video, edit the `portrait-small`, `portrait-large`, `landscape-small`, `landscape-large` attributes on the `<background-video>` in `/src/components/landing-page/template.js`.
	- To change the *mage that displays whilst the video is loading or not playing*, change the `poster-small` and `poster-large` attributes on the `<background-video>` in `/src/components/landing-page/template.js`

- **social-links**
is the component in-charge of rendering the social-media links.
	- To *change where the links go to*, change the `instagram`, `facebook`, or `twitter` attributes on the `<social-links>` in `/src/components/landing-page/template.js`
	- To *remove a link*, remove the `instagram`, `facebook` or `twitter` attribute on the `<social-links>` in `/src/components/landing-page/template.js`
	- To *add a new link*: 
		1. add a new attribute to the `<social-links>` in `/src/components/landing-page/template.js` in the format `whatever="//url.com/"`.
			- any name is valid, but it must not contain spaces, so replace spaces with `-` or `_`; eg. instead of `band camp` use `band-camp` or `band_camp`.
		2. add the icon for the new link in `/dist/assets/icons/`, eg. `/dist/assets/icons/band-camp.svg`
		3. add the icon to the new link by creating a new style in `/src/components/social-links/styles.scss` immediately after the closing `}` of  `&.twitter .link {` in the following format:
			```
			&.band-camp .link {
				background-image: url(assets/icons/band-camp.svg);
			}
			```
			(don't worry - it'll be easy to copy the format when you see it in the file)

- **text-links**
is the component in-charge of rendering non-social-media links
	- To *change where the links go to*, change the `listen`, `live`, or `store` attributes on the `<text-links>` in `/src/components/landing-page/template.js`
	- To *remove a link*, remove the `listen`, `live` or `store` attribute on the `<text-links>` in `/src/components/landing-page/template.js`
	- To *add a new link*, add a new attribute to the `<text-links>` in `/src/components/landing-page/template.js` in the format `whatever="//url.com/"`

- **mute-toggle**
is the component in-charge of the mute-button behaviour, which in-turns controls whether the `<background-video>` is muted or not
	- To **change the text on the button**, change the value of `#MUTE` OR `#UNMUTE` under `//config` in `src/components/mute-toggle/element.js`. eg.
		```
		// config
		#MUTE   = "Be quiet";
		#UNMUTE = "Make some noise";
		```
		(NOTE: it's best to use the correct casing here, and not write in ALL CAPS, as whatever is written will be styled in caps anyway)

Do not make any changes to the `/dist/index.html` or `/dist/bundle.js`, as these files are generated automatically as part of the build-process, and your changes won't be saved.

### 2.2 Viewing Changes

At any time, you can start a local server to view changes by:

1. Opening your terminal
2. navigating to the folder with `cd laundromat-site`
3. starting the server with `npm run build-dev`

This will open a new browser window with the site, and the browser will automatically reload whenever you save after making changes to the code.  If you make any errors in the code, the terminal will say `Failed to compile` and will ususally say why.  You won't see your changes if the terminal failed to compile the code.

If you accidentally close the browser window, you can open it again by visiting `http://localhost:8080/`.

When you've finished, you can stop the server by pressing `ctrl + c` when in the terminal.

## 3. Deploying Changes to the live site

Once you've made the changes and you're happy with them, you can deploy these changes to the live site using Firebase:

1. Open the terminal
2. Navigate to the project folder with `cd laundromat-site`
3. Log in to firebase with `firebase login`
4. Build the site ready for uploading with `npm run build-prod`
5. Upload the site with `firebase deploy`

## 4. Sharing your changes (optional)

If you want to share the changes you've made so (ie. if you make changes and want me to have them as well).

1. Create a github account at https://github.com/join
2. Give your username to `pookage` to be added as a collaborator
3. Once you're a collaborator, open your terminal
4. Navigate to the project folder with `cd laundromat-site`
5. Add all of your changes with `git add .`
6. Describe what you've done by writing `git commit -m "changed the url of a couple social links"`
7. Download the latest version of the site with `git pull`
8. Upload your changes to github with `git push`
