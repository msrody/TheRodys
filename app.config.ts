export default defineAppConfig({
  alpine: {
    title: 'The Rodys',
    description: 'The Rodys is a site for the Rodys.',
    image: {
      src: '/M&CatKarim&AmandasWedding.jpg',
      alt: 'Chelly & Mike Rody - AGWM Missionaries to Indonesia.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/RodysLogoLightSimp.svg', // path of the logo
        pathDark: '/RodysLogoDarkSimp.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'The Rodys' // alt of the logo
      }
    },
    footer: {
      credits: {
        // possible value are : true | false
        enabled: true,

        // our github repository
        repository: 'https://www.github.com/nuxt-themes/alpine',

        text: 'The Rodys'
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow us on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: '@Mike_Rody',
      instagram: 'michaelsrody',

      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/michael-rody/'
      },

      github: 'msrody',
      facebook: 'mike.rody',
      youtube: '@MikeRody'
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
