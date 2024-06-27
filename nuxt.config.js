export default {
    buildModules: [
        '@nuxtjs/vuetify',
    ],
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                light: {
                    primary: '#3B8070',
                    accent: '#FF4081',
                    secondary: '#FFE18D',
                    info: '#26A69A',
                    warning: '#FFC107',
                    error: '#FF5252',
                    success: '#4CAF50'
                }
            }
        }
    }
}
