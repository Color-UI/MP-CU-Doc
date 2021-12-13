import Layout from "@/views/layout/index.vue";

export default [
    {
        path: '/',
        name: 'index',
        meta: {title: '首页'},
        component: () => import('@/views/www/index.vue')
    },
    {
        path: '/docs',
        name: 'docs',
        meta: {title: '文档介绍'},
        component: Layout,
        redirect: '/docs',
        children: [
            {
                path: '/introduction',
                name: 'introduction',
                meta: {title: '介绍'},
                component: () => import('@/views/docs/introduction.vue')
            },
            {
                path: '/installation',
                name: 'installation',
                meta: {title: '安装'},
                component: () => import('@/views/docs/installation.vue')
            },
            {
                path: '/quickstart',
                name: 'quickstart',
                meta: {title: '快速上手'},
                component: () => import('@/views/docs/quickstart.vue')
            },
            {
                path: '/custom-theme',
                name: 'custom-theme',
                meta: {title: '自定义主题'},
                component: () => import('@/views/docs/custom-theme.vue')
            },
            {
                path: '/changelog',
                name: 'changelog',
                meta: {title: '更新日志'},
                component: () => import('@/views/docs/changelog.vue')
            }
        ]
    },
    {
        path: '/basic',
        name: 'basic',
        meta: {title: '基础组件'},
        component: Layout,
        redirect: '/basic',
        children: [
            {
                path: '/grid',
                name: 'grid',
                meta: {title: '栅栏'},
                component: () => import('@/views/components/grid.vue')
            },
            {
                path: '/layout',
                name: 'layout',
                meta: {title: '布局'},
                component: () => import('@/views/components/layout.vue')
            },
            {
                path: '/bg',
                name: 'bg',
                meta: {title: '背景'},
                component: () => import('@/views/components/bg.vue')
            },
            {
                path: '/text',
                name: 'text',
                meta: {title: '文本'},
                component: () => import('@/views/components/text.vue')
            },
            {
                path: '/margin',
                name: 'margin',
                meta: {title: '边距'},
                component: () => import('@/views/components/margin.vue')
            },
            {
                path: '/icon',
                name: 'icon',
                meta: {title: '图标'},
                component: () => import('@/views/components/icon.vue')
            },
            {
                path: '/border',
                name: 'border',
                meta: {title: '边框'},
                component: () => import('@/views/components/border.vue')
            },
            {
                path: '/shadow',
                name: 'shadow',
                meta: {title: '阴影'},
                component: () => import('@/views/components/shadow.vue')
            }
        ]
    },
    {
        path: '/view',
        name: 'view',
        meta: {title: '视图组件'},
        component: Layout,
        redirect: '/view',
        children: [
            {
                path: '/title',
                name: 'title',
                meta: {title: '标题'},
                component: () => import('@/views/components/title.vue')
            },
            {
                path: '/button',
                name: 'button',
                meta: {title: '按钮'},
                component: () => import('@/views/components/button.vue')
            },
            {
                path: '/input',
                name: 'input',
                meta: {title: '按钮'},
                component: () => import('@/views/components/input.vue')
            }
        ]
    },
]
