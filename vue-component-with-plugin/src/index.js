import Hello from './components/Hello.vue';
import options from './options';

export default {
	install(Vue, {text}) {
		options.text = text || options.text;

		Vue.component('Hello', Hello);
	}
};
