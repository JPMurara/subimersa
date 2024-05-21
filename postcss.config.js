import tailwindcss from 'tailwindcss';

const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		//But others, like autoprefixer, need to run after,
		tailwindcss() //Some plugins, like tailwindcss/nesting, need to run before Tailwind, tailwindcss(), //But others, like autoprefixer, need to run after, autoprefixer, autoprefixer]
	]
};

export default config;
