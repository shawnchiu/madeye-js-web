// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import BasicLayout from './layouts/BasicLayout';
import Dashboard from './pages/Dashboard';
import Business from './pages/Business';
import LogConditonQuery from './pages/LogConditonQuery';
import NotFound from './pages/NotFound';

const routerConfig = [
  {
    path: '/',
    layout: BasicLayout,
    component: Dashboard,
  },
  {
    path: '/business',
    layout: BasicLayout,
    component: Business,
  },
  {
    path: '/log/query',
    layout: BasicLayout,
    component: LogConditonQuery,
  },
  {
    path: '*',
    layout: BasicLayout,
    component: NotFound,
  },
];

export default routerConfig;
