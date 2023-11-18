/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            backgroundImage: {
                'snow': "url('https://cdn.discordapp.com/attachments/1086388114790027384/1148033386083000370/1920x1080-456458-Haikyuu-Japan-anime-karasuno-kanji_cleanup-transformed.png')"
            }
        },
    },
    plugins: [],
};