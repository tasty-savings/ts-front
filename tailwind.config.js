/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //버튼 색상
        button: {
          primary: {
            DEFAULT: '#1E40AF', // 기본 색상 (파란색 계열)
            hover: '#60A5FA',   // 밝은 색상
            disabled: '#1E3A8A',
          }
        },
      },
    },
  },
  plugins: [],
}

