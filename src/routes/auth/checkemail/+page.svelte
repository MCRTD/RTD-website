<script>
	import { goto } from '$app/navigation'
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-3xl">
			<h1 class="text-5xl font-bold">Thanks For Your Register</h1>
			<p class="py-6 text-xl">
				We've sent a verification email to your inbox. Please click the link in the email to
				activate your account.
			</p>
			<button class="btn btn-primary" on:click={() => goto('/')}>Go Home</button>
		</div>
	</div>
</div>
