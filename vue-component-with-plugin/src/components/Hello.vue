<template>
	<p>{{ text }}</p>
</template>

<script>
import options from '../options';

export default {
	name: 'Hello',
	data() {
		return {
			text: options.text
		};
	}
};
</script>

<style scoped>
p {
	color: blue;
}
</style>

