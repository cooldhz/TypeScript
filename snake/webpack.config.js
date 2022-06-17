// 引入包
const path = require('path')
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// webpack配置对象
module.exports = {
    mode: 'production',
    // 指定入口文件
    entry: "./src/index.ts",
    // 指定打包文件所在的目录
    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        environment: {
            arrowFunction: false // 关闭webpack的箭头函数，可选
        }
    },

    // 指定webpack打包时要使用的模块
    module: {
        // 指定加载的规则
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        "targets": {
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        "corejs": "3",
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    {
                        loader: "ts-loader",
                    }
                ],
                exclude: /node_modules/
            },

            // 设置less文件处理
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    // 引入 postcss
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: "last 2 versions"
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },

    // 配置webpack插件
    plugins: [
        new HTMLWebpackPlugin({
            // title: '这是一个自定义的title'
            template: "./src/index.html"
        })
    ],

    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
};