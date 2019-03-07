module.exports = ({text}) => ({
	name: 'hello-plugin',
	enhanceAppFiles() {
		return {
			name: 'dynamic-hello-plugin',
			content: `import HelloPlugin from 'vue-component-with-plugin';
			import 'vue-component-with-plugin/dist/bundle.cjs.css';

			export default ({ Vue }) => {
				Vue.use(HelloPlugin, { text: ${JSON.stringify(text)} });
			};`
		};
	}
});
