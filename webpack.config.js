module.exports={
    entry:{
        index: './src/index.tsx'
    },
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devtool : 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', 'js', 'jsx']
    },
    module: {
        rules: [
            {
                test : /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                enforce: 'pre',
                test : /\.js$/,
                loader: 'source-map-loader'
            } 
        ]
    }
}