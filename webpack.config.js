const path = require('path');

module.exports = {
    // entry:"./static/entry/index.js",
    entry:{
        webcog:'./static/entry/index.js',
        second:'./static/entry/css.js',
    },
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname, "static", "bundle"),
    },
    module:{
        rules: [
            {
                test: /\.css$/i,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },

    // optimization:{
    //     minimize: true,
    // }
}