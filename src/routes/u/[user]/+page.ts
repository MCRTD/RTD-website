export function load({ params }: { params: { user: string } }) {
	return {
		title: 'Hello world! You are on ' + params.user + ' page!',
		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
	};
}
