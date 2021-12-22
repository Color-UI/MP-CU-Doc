const cuLetPlugin = (res) => {
    return {
        name: 'vuepress-plugin-cu-let',
        define: {
            base: res.base,
            docImagesUrl: res.imgUrl
        }
    }
}

module.exports = cuLetPlugin