export function load({ params }: { params: { slug: string } }) {
    return {
        title: 'Hello world! You are on ' + params.slug + ' page!',
        content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    };
}