var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = (outputFile, htmlMinifyOption) => ({
    target: 'web',      // for ES5
    context: __dirname,
    entry: {
        tables: './tables.js',
    },
    output: {
        path: path.resolve('../'),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {loader: "babel-loader"}
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: 'style-loader'
                    },
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: 'css-loader'
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: {
                        // For `underscore` library, it can be `_.map map` or `_.map|map`
                        exposes: "jQuery",
                    },
                }, {
                    loader: 'expose-loader',
                    options: {
                        // For `underscore` library, it can be `_.map map` or `_.map|map`
                        exposes: "$",
                    },
                }]
            },
            {
                test: /\.(png|svg|jpg|gif|eot|woff|woff2|ttf)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /datatables\.net*.js$/,
                use: 'imports-loader?define=>false'
            }
        ],
    },
    resolve: {
        alias: {
            // Force all modules to use the same jquery version.
            'jquery': path.join(__dirname, 'node_modules/jquery/src/jquery')
        }
    },
    plugins: [
        new BundleTracker({filename: './static/webpack_bundles/webpack-stats.json'}),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery',
            moment: 'moment',
            Chart: 'chart.js',
        }),
        new webpack.DefinePlugin({
            'csrftoken': ''
        })
    ]
});