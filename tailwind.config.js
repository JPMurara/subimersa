/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'poetsen-one': ['Poetsen One', 'sans-serif'],
        // Add other custom font families here
      },
      colors: {
				blue: {
					1: ' #026891',
					2: '#afd6e6',
					3: '#19a9d1',
					4: '#afd6e6'
				}
    }
  },
  plugins: [require('@tailwindcss/typography'),]
}
}