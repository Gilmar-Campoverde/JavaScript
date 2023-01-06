const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: './src/main.js', //entrada para su ejecucion en la web
    mode: 'development', //modo para el webpack que toma 
    output: {
        path: __dirname + '/dist/',
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html' //la pagina inicial que muestra
        }
        )],
    module: {
        rules: [    //un arreglo
            {
                test: /\.css$/i,    //ejecuta todos los archivos que terminan con .css
                use: ["style-loader", "css-loader"], //carga todos los archivos de css en webpack
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
    devtool: "eval-source-map",
};
