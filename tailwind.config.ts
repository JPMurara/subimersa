// Import the types for tailwind configuration
import type { Config } from 'tailwindcss';

// Import the typography plugin directly using ES module syntax
import typography from '@tailwindcss/typography';

// Define the tailwind configuration
const config: Config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        action: {
          light: '#FFF5F2',
          DEFAULT: '#FFF1EE',
          dark: '#FFE4DE'
        },
        primary: {
          light: '#FFF5F2',
          DEFAULT: '#FFF1EE',
          dark: '#FFE4DE'
        },
        secondary: {
          light: '#FFF5F2',
          DEFAULT: '#FFF1EE',
          dark: '#FFE4DE'
        },
      },
    },
  },
  plugins: [typography],
};

// Export the configuration as the default export
export default config;
