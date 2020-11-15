<template>
<div>
	<form @submit.prevent="processForm">
		<p class="is-title has-text-centered">Be the first to know when the new release is out!</p>
		<div class="field">
			<label for="" class="label">Email</label>
			<div class="control has-icons-left">
				<input 
					type="email" 
					class="input" 
					name="email" 
					placeholder="e.g. bobsmith@gmail.com"
					v-model="email">
					<span class="icon is-small is-left">
						<fa :icon="['fas', 'envelope']"/>
					</span>
				</div>
		</div>
		<br>
		<button class="button is-primary is-centered is-fullwidth" type="submit"><strong>Join Early Access</strong></button>
	</form>
	<h2>You send this: {{ saved_email }}</h2>
	<FlashMessage :position="'left bottom'"></FlashMessage>

</div>
</template>


<script>

export default {

  name: 'SignUpForm', 
  data () {
    return {
	  email: '',
	  saved_email: ''
    }
  },
  methods: {
	async processForm() {
		// const response = await this.$axios.$post('https://donkey.feature-tour.com/emailsignup/create', {"email": this.email})
		const response = await this.$axios.$post('http://localhost:8000/emailsignup/create', {"email": this.email})
		this.saved_email = response.email
		this.flashMessage.show({
			status: 'success',
			title: `${this.saved_email}   has been added. We'll be in touch soon!`,
			contentClass: "fmessage"
		});
  	}
  }
}

</script>


<style>
.fmessage {
	padding: 15;
}
</style>
