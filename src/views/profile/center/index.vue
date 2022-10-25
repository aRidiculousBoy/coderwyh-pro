<template>
  <div class="page-center">
    <div class="user-card">
      <a-card :bordered="false" style="width: 360px">
        <a-result title="a Ridiculous Boy" sub-title="疫情快快结束">
          <template #icon>
            <a-avatar :size="128" :src="remoteAvatarSrc" />
          </template>
        </a-result>
        <a-divider />
        <div class="professional-info">
          <div>
            <a-space>
              <a-icon type="profile" :style="{ fontSize: '14px' }" />
              <span>前端开发实习生</span></a-space
            >
          </div>
          <div>
            <a-space>
              <a-icon type="compass" :style="{ fontSize: '14x' }" />
              <span>电魂网络-发行线-技术运营中心-运营开发部-前端开发组</span></a-space
            >
          </div>
          <div>
            <a-space>
              <a-icon type="environment" :style="{ fontSize: '14px' }" />
              <span>浙江省杭州市</span></a-space
            >
          </div>
        </div>
        <a-divider />
        <div class="skill-info">
          <a-tag v-for="item in technicalAbilities" style="margin: 4px" :key="item">{{
            item
          }}</a-tag>
          <a-button size="small">+</a-button>
        </div>
        <a-divider />
        <div class="team-work">
          <div class="team-work-item" v-for="team in teams">
            <a-space>
              <a-avatar :size="32" :src="team.logo"></a-avatar>
              <span>{{ team.title }}</span>
            </a-space>
          </div>
        </div>
      </a-card>
    </div>
    <div class="light-card">
      <a-card
        :bordered="false"
        :tab-list="tabList"
        :active-tab-key="currentTab"
        @tabChange="handleTabChange"
      >
        <a-spin tip="加载中" :spinning="spinning">
          <div v-if="currentTab === 'article'">
            <template v-for="article in articles">
              <article-item v-bind="article"></article-item>
            </template>
          </div>
          <p v-if="currentTab === 'item'">item</p>
          <p v-if="currentTab === 'app'">app</p>
        </a-spin>
      </a-card>
    </div>
  </div>
</template>

<script>
import ArticleItem from './components/articleitem'

export default {
  name: 'Center',
  components: {
    ArticleItem
  },
  data() {
    const remoteAvatarSrc =
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgss0.baidu.com%2F9fo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Ff3d3572c11dfa9ec70ac493667d0f703918fc115.jpg&refer=http%3A%2F%2Fgss0.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669291008&t=1a36a65cc42726b546ce79ff7e42a239'

    const rngMotto = 'RNG'
    const rngLogoSrc =
      'https://gimg3.baidu.com/rel/src=https%3A%2F%2Fbkimg.cdn.bcebos.com%2Fsmart%2F94cad1c8a786c917e23977d9c73d70cf3bc75713-bkimg-process%2Cv_1%2Crw_1%2Crh_1%2Cmaxl_700&refer=http%3A%2F%2Fwww.baidu.com&app=2010&size=f200,200&n=0&g=0n&q=100&fmt=auto?sec=1666803600&t=350d5e20e057aedccff020fdf3834acd'

    const devDepartment = '运营开发部'
    const devLogo = 'https://vui-design.github.io/vui-design-pro/images/apps/bootstrap.png'

    const lpl = 'LPL加油'
    const lplLogo =
      'https://gimg3.baidu.com/search/src=https%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2F0e2442a7d933c8954c079303de1373f082020048.jpg&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=w240&n=0&g=0n&q=75&fmt=auto?sec=1666803600&t=ad4b80e1e77854284840b3e7ac1d9a9b'

    // 团队
    const teams = [
      {
        title: devDepartment,
        logo: devLogo
      },
      {
        title: lpl,
        logo: lplLogo
      },
      {
        title: rngMotto,
        logo: rngLogoSrc
      }
    ]
    // 技能树
    const technicalAbilities = ['JavaScript', 'Vuejs', 'Webpack', 'Http', 'Git', 'Coderwyh Pro']
    const tabList = [
      {
        key: 'article',
        tab: '文章'
      },
      {
        key: 'item',
        tab: '项目'
      },
      {
        key: 'app',
        tab: '应用'
      }
    ]
    const currentTab = tabList[0].key

    // 文章
    const articles = []

    // 控制spin的状态
    const spinning = true
    return {
      remoteAvatarSrc,
      technicalAbilities,
      teams,
      tabList,
      currentTab,
      articles,
      spinning
    }
  },
  methods: {
    handleTabChange(key) {
      this.currentTab = key
      if (key == 'article') {
        this.articles = []
        this.spinning = true
        setTimeout(() => {
          this.articles = [
            {
              title: 'Node.js',
              descTags: ['nodejs', 'v8', 'libuv', 'chrome', 'asynchronize io'],
              description:
                '如果你是一个前端程序员，你不懂得像 PHP、Python 或 Ruby 等动态编程语言，然后你想创建自己的服务，那么 Node.js 是一个非常好的选择。Node.js 是运行在服务端的 JavaScript，如果你熟悉 Javascript，那么你将会很容易的学会 Node.js。当然，如果你是后端程序员，想部署一些高性能的服务，那么学习 Node.js 也是一个非常好的选择！',
              author: '洪七公',
              url: 'https://github.com/nodejs',
              publishDate: '2020-08-08 16:40',
              star: 100,
              like: 666,
              comment: 888,
              cover: 'https://vui-design.github.io/vui-design-pro/images/apps/nodejs.png'
            },
            {
              title: 'Webpack',
              descTags: ['webpack', '构建工具', '工程化', '现代打包工具'],
              description:
                '本质上，Webpack 是一个现代 JavaScript 应用程序的静态模块打包器。当 Webpack 处理应用程序时，它会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 Bundle。',
              author: '欧阳锋',
              url: 'https://github.com/webpack',
              publishDate: '2020-08-08 16:40',
              star: 100,
              like: 666,
              comment: 888,
              cover: 'https://vui-design.github.io/vui-design-pro/images/apps/webpack.png'
            }
          ]
          this.spinning = false
        }, 500)
      }
    }
  },
  created() {
    setTimeout(() => {
      this.articles = [
        {
          title: 'Node.js',
          descTags: ['nodejs', 'v8', 'libuv', 'chrome', 'asynchronize io'],
          description:
            '如果你是一个前端程序员，你不懂得像 PHP、Python 或 Ruby 等动态编程语言，然后你想创建自己的服务，那么 Node.js 是一个非常好的选择。Node.js 是运行在服务端的 JavaScript，如果你熟悉 Javascript，那么你将会很容易的学会 Node.js。当然，如果你是后端程序员，想部署一些高性能的服务，那么学习 Node.js 也是一个非常好的选择！',
          author: '洪七公',
          url: 'https://github.com/nodejs',
          publishDate: '2020-08-08 16:40',
          star: 100,
          like: 666,
          comment: 888,
          cover: 'https://vui-design.github.io/vui-design-pro/images/apps/nodejs.png'
        },
        {
          title: 'Webpack',
          descTags: ['webpack', '构建工具', '工程化', '现代打包工具'],
          description:
            '本质上，Webpack 是一个现代 JavaScript 应用程序的静态模块打包器。当 Webpack 处理应用程序时，它会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 Bundle。',
          author: '欧阳锋',
          url: 'https://github.com/webpack',
          publishDate: '2020-08-08 16:40',
          star: 100,
          like: 666,
          comment: 888,
          cover: 'https://vui-design.github.io/vui-design-pro/images/apps/webpack.png'
        }
      ]
      this.spinning = false
    }, 500)
  }
}
</script>

<style scoped lang="less">
.page-center {
  display: flex;
}
.ant-result {
  padding: 12px;
}

.professional-info div {
  padding: 2px 0 2px 0;
}

.team-work {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.team-work-item {
  width: 44%;
  margin: 10px 0 10px 0;
}

.user-card {
  padding: 0 12px;
}
.light-card {
  width: 100%;
  padding: 0 16px;
}
</style>
