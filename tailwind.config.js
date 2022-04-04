module.exports = {
  content: ["./src/**/*.{html,js}", './node_modules/tw-elements/dist/js/**/*.js' ],
  theme: {
    colors:{

      'naranja': '#EF7C37',
      'naranjaFuerte': '#E94E1B',
      'amarilloButton': '#F9B233',
      'amarilloHover': '#e0a02e',
      'verde': '#467572',
      'blanco':'#Ffffff',
      'azulFuerte':'#3786c5',
      'azulClaro':'#89b7de',
      'logo':'#54a0d6',
      'azulInput':'#daedf9',
      'gris':'#587586',


    },
    extend: {

    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
