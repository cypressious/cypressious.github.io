import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
    faAndroid,
    faBluesky,
    faFirefoxBrowser,
    faGithub,
    faGooglePlay,
    faHtml5,
    faJava,
    faLinkedin,
    faMastodon,
    faMicrosoft,
    faStackOverflow,
    faTwitter,
    faXing
} from '@fortawesome/free-brands-svg-icons';
import {
    faArrowLeft,
    faCircle,
    faDatabase,
    faEye,
    faFilePdf,
    faGlobe,
    faVideo
} from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(
    faCircle, faEye, faFilePdf, faVideo, faArrowLeft,
    faGithub, faStackOverflow, faTwitter, faLinkedin, faXing, faGooglePlay, faJava, faAndroid, faMicrosoft, faHtml5,
    faFirefoxBrowser, faGlobe, faDatabase, faMastodon, faBluesky,
);
