import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        default: 'light',
        themes: {
            light: {
                primary: '#03A9F4',
                secondary: '#81D4FA',
                accent: '#75E6DA',
                error: '#D81B60',
                info: '#E1F5FE',
                success: '#009688',
                warning: '#FFB300',
            },
            dark: {
                primary: '#01579B',
                secondary: '#0288D1',
                accent: '#26C6DA',
                error: '#E53935',
                info: '#81D4FA',
                success: '#00BFA5',
                warning: '#FFB300',
            },
        },
    },
});
