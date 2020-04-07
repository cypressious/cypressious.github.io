// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome';
// import 'prismjs/themes/prism.css';
import DefaultLayout from '~/layouts/Default.vue';
import './styles/fontAwesomeIcons';
import './styles/index.scss';

export default function (Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout);
    Vue.component('FontAwesomeIcon', FontAwesomeIcon);
    Vue.component('FontAwesomeLayers', FontAwesomeLayers);

    head.meta.push({
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
    });

    head.meta.push({
        name: 'google-site-verification',
        content: 'iUq6VtnS5zRh-s4b27kdrA1sx9a1YdgEr35fwUd4lGg'
    });

    head.link.push({
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'RSS Feed for Kirill Rakhman\'s Dev Blog',
        href: '/rss.xml'
    });

    router.options.linkActiveClass = 'is-active';
}
