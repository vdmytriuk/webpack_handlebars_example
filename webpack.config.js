const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const pages = ['index'];

const multipleHtmlPlugins = pages.map(name => {
    return new HtmlWebpackPlugin({
        template: `./src/pages/${name}.hbs`,
        filename: `${name}.html`,
        chunks: [`${name}`, "app"],
        minify: false
    })
});

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
        open: true,
        hot: true,
        port: 3000,
    }
};

module.exports = ({develop}) => ({
    mode: develop ? 'development' : 'production',
    entry: glob.sync('./src/js/**.js*').reduce(function(obj, el){
        obj[path.parse(el).name] = el;
        return obj
    },{}),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].js',
        assetModuleFilename: 'images/[name][ext][query]'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/main.css'
        }),
      ...multipleHtmlPlugins
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: './images/',
                            esModule: false
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../fonts/',
                        },
                    },
                ],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize: false
                }
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
                options: {
                    knownHelpersOnly: false,
                    inlineRequires: '\/images\/'
                }
            }
        ]
    },
    ...devServer(develop),
});
