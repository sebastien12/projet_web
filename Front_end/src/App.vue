<template>
  <div id="app">
	<button @click="toggleSend">nouveau message</button>
	<br/>
	<div v-if="showSend">
		<label>A:</label>
		<input v-model="to">
		<br/>
		<label>Sujet:</label>
		<input v-model="sujet">
		<br/>
		<label>Messages</label>
		<textarea v-model="message"></textarea>
		<button @click="sendMessage">Envoyer</button>
	</div>
	{{ to }}
		{{ sujet }}
		{{ message }}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
	return {
		to: '',
		sujet: '',
		message: '',
		showSend: false,
	}
  },
  methods: {
	toggleSend() {
		this.showSend = !this.showSend
	},
	sendMessage() {
		// AXIOS
		alert(this.to + ' ' + this.sujet);
	}
  },
}
</script>

<style>
	
</style>
