// 导入组件
const Layout = () => import('@/layout/index.vue')
const Workspace = () => import('@views/dashboard/workspace')
const Analysis = () => import('@views/dashboard/analysis')

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
        redirect: '/dashboard/workspace/test',
        // component: Workspace,
        meta: {
          title: '工作台',
          icon: 'smile',
          // hasSubMenu: false,
          hasSubMenu: true
        },
        children: [
          {
            name: 'Tester',
            path: '/dashboard/workspace/test',
            component: Workspace,
            meta: {
              'title': '测试',
              icon: 'smile',
              hasSubMenu: false
            }
          }
        ]
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
    }
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
