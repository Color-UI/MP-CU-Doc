module.exports = {
    base: '/',
    lang: 'zh-CN',
    title: 'MP-CU文档',
    description: 'MP-CU文档，ColorUI 微信原生小程序UI组件库',
    head: [
        ['link', {rel: 'icon', href: '/images/favicon.ico'}]
    ],
    themeConfig: {
        logo: '/images/logo.png',
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
                text: '下载源码',
                children: [
                    {text:'GitHub 仓库', link: 'https://github.com/Color-UI/MP-CU'},
                    {text:'Gitee 仓库', link: 'https://gitee.com/color-ui/MP-CU'}
                ],
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
                        '/guide/border.md',
                        '/guide/style.md'
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
                        '/component/steps.md',
                        '/component/input.md',
                        '/component/radio.md',
                        '/component/checkbox.md',
                        '/component/switch.md',
                    ]
                },
            ],
            '/laboratory/': [
                {
                    text: '实验室',
                    children: [
                        '/laboratory/README.md',
                        '/laboratory/fixed-tools.md',
                        '/laboratory/dot-tag.md',
                        '/laboratory/layout.md',
                        '/laboratory/stepper.md',
                        '/laboratory/notify.md',
                        '/laboratory/divider.md',
                        '/laboratory/search-bar.md',
                    ]
                },
            ],
            '/api/': [
                {
                    text: 'Api',
                    children: [
                        '/api/README.md',
                        '/api/request.md',
                        '/api/dataType.md',
                        '/api/random.md',
                        '/api/date.md',
                        '/api/array.md',
                        '/api/object.md',
                        '/api/tools.md'
                    ]
                },
            ],
            '/update/': [
                {
                    text: '更新日志',
                    children: [
                        '/update/README.md'
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
            }
        ]
    ],
}