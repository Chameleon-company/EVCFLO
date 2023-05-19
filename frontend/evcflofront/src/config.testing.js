const config = {
    API_URL: 'http://127.0.0.1:5000/api',
    GOOGLE_KEY: '', //Request api key from config.development.js if testing requires valid api key to work
    //Can include if we want certain features enable while testing
    //for example could disable the login feature or chatbot once it is enabled
    //so they dont get in the way. eg. enableLogin: false
}

export default config;