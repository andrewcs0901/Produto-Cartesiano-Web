const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = app => {
    app.use(
        '/calculate',
        createProxyMiddleware({
            target: 'https://produto-cartesiano.herokuapp.com', 
            changeOrigin: true
        })
    )
}