import '../src/style.css'; // Assurez-vous que le chemin est correct
import { createApp } from 'vue';
import App from './App.vue';

import { createI18n } from 'vue-i18n';
import en from './locale/en.json';
import es from './locale/es.json';
import fr from './locale/fr.json';


const messages = {
    en,
    fr,
    es
}
const i18n = createI18n({
    locale: 'fr',
    fallbackLocale: 'fr',
    messages
});

const app = createApp(App);
app.use(i18n);
app.mount('#app');
