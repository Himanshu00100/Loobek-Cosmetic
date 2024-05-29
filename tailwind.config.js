/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens:{ 
        mds:'400px',
        xs:'500px',
        ss:'0px',
        ms:'360px',
        slg:'1400px'
      },
      spacing:{

        100:'100px', 
        98:'26rem',
        82:'22rem',
        104:'32rem',
        108:'36rem',
        112:'42rem',
        116:'46rem',
        130:'50rem'

      },
      ringWidth:{
        0.5:"1px"
      },
      fontFamily:{
        agbalumo:'Agbalumo',
        alata:'Alata',

      },
      textUnderlineOffset:{
        9:'9px'
      }
      
    },
  },
  plugins: [],
}

