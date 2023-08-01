/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
   
    
    extend:
    {
    safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]'] ,
  
    animation: {
    cursor: 'cursor .6s linear infinite alternate',
    type: 'type 1.8s ease-out .8s 1 normal both',
    'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
  },
  
      fontFamily: {
      mullish: ["Mulish", "sans-serif"],
      lob: ["Lobster", "cursive"],
      titlef:["Lobster","cursive","Alice","serif"],

    },
    colors: {
      db:"#3533cd",
      pale: "#da6456",
      deepBlue: "#02042a",
      lightBlue: "#2b84ea",
      lightBlue300: "#4b94ed",
      lightBlue500: "#0b72e7",
      greenLight: "#61cea6",
      lightGray: "#e2e2e2",
      grayBlue: "#344a6c",
      deepBlueHead: "#162f56",
      gray2: "#525a76",
      design:"#f4e6d0",
      desihn1:"#c1c9e5",
      deve:"#acb1fe",
      hex:"#eef6ee",
      col1:"#F6AE2D",
      col2:"#B3EFB2",
      col3:"#8aea8b",
      col4:"#fcfdfc",
    },},
    safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]'],
  },
  plugins: [],
}


