module.exports = {
    base: '/MP-CU/',
    lang: 'zh-CN',
    title: 'MP-CU文档',
    description: 'MP-CU文档，ColorUI 微信原生小程序UI组件库',
    head: [
        ['link', {rel: 'icon', href: '/images/icon/favicon.ico'}]
    ],
    themeConfig: {
        logo: '/images/icon/logo.png',
        navbar: [
            {
                text: '组件',
                link: '/guide/'
            },
            {
                text: 'Api',
                link: '/api/'
            },
            {
                text: '实验室',
                link: '/test/'
            },
            {
                text: '模板',
                link: '/tpl/'
            },
            {
                text: '定制',
                link: '/custom/'
            },
            {
                text: '生态',
                children: [
                    {text:'uni-app版', link: 'https://github.com/weilanwl/coloruiBeta'},
                    {text:'2.x版本', link: 'https://github.com/weilanwl/ColorUI'}
                ]
            },
            {
                text: 'GitHub',
                link: 'https://github.com/Color-UI/MP-CU'
            },
        ]
    },
    plugins: [
        [
            '@vuepress/plugin-search', {
                locales: {'/': {placeholder: 'Search'}, '/zh/': {placeholder: '搜索'}},
                isSearchable: (page) => page.path !== '/', // 排除首页
            },
        ],
    ],
}