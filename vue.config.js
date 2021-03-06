module.exports={
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',
                'components':'@/components',
                'views':'@/views',
                'common':'@/common',
                'api':'@/api',
                'utils':'@/utils',
                'base':'@/base'
            }
        }
    },
    lintOnSave: false
}