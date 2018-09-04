// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [];

const asideMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: 'home',
  },
  {
    name: '业务管理',
    path: '/business',
    icon: 'yonghu',
  },
  {
    name: '日志管理',
    path: '/log',
    icon: 'shezhi',
    children: [
      {
        name: '日志查询',
        path: '/log/query',
      },
      {
        name: '实时监控',
        path: '/realtimeWatch',
      },
    ],
  },
  {
    name: '用户管理',
    path: '/user',
    icon: 'yonghu',
  },
];

export { headerMenuConfig, asideMenuConfig };
