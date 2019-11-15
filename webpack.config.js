const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/client/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist/')},
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|svg|ico)$/,
                use: 
                [
                    {
                        // loads files as base64 encoded data url if image file is less than set limit
                        loader: "url-loader",
                        options: 
                            {
                                // if file is greater than the limit (bytes), file-loader is used as fallback
                                limit: 90000
                            },
                    },
                ],
            },
        ]
    },
    devServer: {
        compress: true,
        contentBase: path.resolve(__dirname, './client'),
      },
    plugins: [
        new HWP({template: path.join(__dirname, 'client/index.html')})
    ]
}
