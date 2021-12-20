module.exports = {
    base: '/',
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
                text: '指南',
                link: '/guide/'
            },
            {
                text: '组件',
                link: '/component/'
            },
            {
                text: '实验室',
                link: '/laboratory/'
            },
            {
                text: '模板',
                link: '/template/'
            },
            {
                text: '定制',
                link: '/custom/'
            },
            {
                text: 'Api',
                link: '/api/'
            },
            {
                text: '更新日志',
                link: '/update/'
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
        ],
        sidebar: {
            '/guide/': [
                {
                    text: '指南',
                    children: [
                        '/guide/README.md',
                        '/guide/getting-started.md',
                        '/guide/configuration.md',
                        '/guide/sys.md',
                        '/guide/built-in.md',
                        '/guide/background.md',
                        '/guide/text.md',
                        '/guide/icon.md',
                        '/guide/shadow.md',
                        '/guide/border.md'
                    ]
                },
            ],
            '/component/': [
                {
                    text: '组件',
                    children: [
                        '/component/README.md',
                        '/component/theme.md',
                        '/component/navbar.md',
                        '/component/avatar.md',
                        '/component/title.md',
                        '/component/tag.md',
                        '/component/button.md',
                        '/component/image.md',
                        '/component/code.md',
                        '/component/progress.md',
                        '/component/loading.md',
                        '/component/menu.md',
                        '/component/fixed.md',
                        '/component/card.md',
                        '/component/grid.md',
                        '/component/popover.md',
                        '/component/modal.md',
                        '/component/toast.md',
                        '/component/tab.md',
                        '/component/swiper.md',
                    ]
                },
            ]
        },
        contributors: false,
        lastUpdatedText: '上次更新'
    },
    plugins: [
        [
            '@vuepress/plugin-search', {
                locales: {placeholder: 'Search'},
                isSearchable: (page) => page.path !== '/', // 排除首页
            },
        ],
    ],
}