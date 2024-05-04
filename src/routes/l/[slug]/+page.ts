export function load({ params }: { params: { slug: string } }) {
    // slug: id
    return {
        title: 'Hello world! You are on ' + params.slug + ' page!',
        content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
        data: {}
    };
}