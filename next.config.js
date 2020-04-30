// const withCSS = require('@zeit/next-css')
// const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const path = require('path')

// module.exports = withCSS(withSass({
//     webpack(config, options) {
//         config.module.rules.push({
//             test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//             use: [{
//                 loader: require.resolve('url-loader'),
//                 options: {
//                     limit: 100000
//                 }
//             },
//             { loader: 'style-loader' },
//             { loader: 'css-loader', options: { modules: true, importLoaders: 1, sourceMap: true } }
//             ]
//         })
//         return config
//     }
// }))


module.exports = withImages({
    webpack(config, options) {

        Object.assign(config.resolve.alias, {
            Components: path.resolve(__dirname, 'Components'),
            public: path.resolve(__dirname, 'public')
        })

        return config
    }
})