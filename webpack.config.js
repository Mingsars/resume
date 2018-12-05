let path = require('path')

module.exports = {
    entry : './js/index.js',
    output  : {
        path : path.resolve(__dirname,'./dist'),
        filename : 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use : ['url-loader']
            }
        ]
    }

}