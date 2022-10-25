// 导入组件
const Layout = () => import('@/layout/index.vue')
const Workspace = () => import('@views/dashboard/workspace')
const Analysis = () => import('@views/dashboard/analysis')

// 异常页组件
const UnAuthorization = () => import('@views/exception/403')
const NotFound = () => import('@/views/exception/404')
const ServerError = () => import('@views/exception/500')
const CommingSoon = () => import('@/views/exception/commingsoon')
// 用于测试的组件
const Jser = () => import('@views/test/jser')

// 空布局组件 主要用于给二级路由占位
const RouteView = {
  render: (h) => h('router-view')
}

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    redirect: '/dashboard/workspace',
    component: Layout,
    meta: {
      title: '仪表盘',
      hasSubMenu: true,
      icon: 'dashboard'
    },
    children: [
      {
        name: 'Workspace',
        path: '/dashboard/workspace',
        component: Workspace,
        meta: {
          title: '工作台',
          icon: 'smile',
          hasSubMenu: false
        }
      },
      {
        name: 'Analysis',
        path: '/dashboard/analysis',
        component: Analysis,
        meta: {
          title: '分析页',
          icon: 'pie-chart',
          hasSubMenu: false
        }
      }
    ]
  },
  {
    name: 'Exception',
    path: '/exception',
    component: Layout,
    redirect: '/exception/403',
    meta: {
      title: '异常页',
      icon: 'warning',
      hasSubMenu: true
    },
    children: [
      {
        name: '403',
        path: '/exception/403',
        component: UnAuthorization,
        meta: {
          title: '403',
          icon: 'lock',
          hasSubMenu: false
        }
      },
      {
        name: '404',
        path: '/exception/404',
        component: NotFound,
        meta: {
          title: '404',
          icon: 'question-circle',
          hasSubMenu: false
        }
      },
      {
        name: '500',
        path: '/exception/500',
        component: ServerError,
        meta: {
          title: '500',
          icon: 'close-circle',
          hasSubMenu: false
        }
      },
      {
        name: 'CommingSoon',
        path: '/exception/comming',
        component: CommingSoon,
        meta: {
          title: '敬请期待',
          icon: 'close-circle',
          hasSubMenu: false
        }
      }
    ]
  },
  {
    name: 'Test',
    path: '/test',
    component: Layout,
    redirect: '/test',
    meta: {
      title: 'Jser',
      hasSubMenu: false,
      icon: 'dashboard'
    },
    children: [
      {
        path: '/test',
        component: Jser
      }
    ]
  }
]

export default routes
