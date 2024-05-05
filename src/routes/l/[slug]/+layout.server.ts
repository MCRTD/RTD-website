import { error } from '@sveltejs/kit';

export function load({ params }: { params: { slug: string } }) {
    console.log(params)
    return {
        title: 'Hello world! You are on ' + params.slug + ' page!',
        content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
        data: {}
    };

	error(404, 'Not found');
}