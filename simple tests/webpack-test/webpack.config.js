const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('./package.json');
// const CssEntryPlugin = require("css-entry-webpack-plugin");
const webpack = require("webpack");

// var htmlWebpackPlugin = require('html-webpack-plugin');

var environment = process.env.NODE_ENV || 'development';
// var sourceMaps = environment == 'development' ? "eval-source-map" : "source-map";


var extractPlugin = new ExtractTextPlugin({
    filename: 'css/[name].bundle.css'
});

module.exports={
    entry: {app: './src/js/app.js', css:'./src/scss/main.scss', vendors: ['vue']},
    // entry: ['./src/js/app.js', './src/scss/main.scss'],
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'js/[name].bundle.js',
        // filename: 'js/[name].js',
        // sourceMapFilename: 'js/[name].map',
        // chunkFilename: 'js/[id].js'
        //publicPath: '/public/dist'
    },
    devtool: "source-map",
    devServer: {
        contentBase: './public/dist'
    },
    resolve: {
        alias: {
          vue: 'vue/dist/vue.js'
        }
    },
    module: {
        rules:[
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.js$/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png)$/,
                use:[{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: "img/",
                        publicPath: '/'
                    }
                }]
            },
            {
                test: /\.html$/,
                use:[{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }],
            }
        ]
    },
    plugins: [
        extractPlugin,
        new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'js/vendor.bundle.js'})
    ]
};