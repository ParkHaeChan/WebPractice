const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /[\.js]$/, // .js에 한하여 babel-loader를 이용하여 transpiling
                exclude: /node_module/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.ts$/, // .ts에 한하여 ts-loader를 이용하여 transpiling
                exclude: /node_module/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ['@babel/preset-typescript', { allowNamespaces: true }]
                        ]
                    }
                },
            },
        ],
    },
    resolve: {
        modules: [path.join(__dirname, "src"), "node_modules"], // 모듈 위치
        extensions: [".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", // 템플릿 위치
        }),
    ],
    mode: "development"
};