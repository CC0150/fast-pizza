# Fast Pizza - 极速披萨订购系统

一个现代化的披萨在线订购应用，提供直观的用户界面和流畅的订购体验。

## 项目特性

- 🎯 **用户友好**：简洁明了的界面设计，提供流畅的订购流程
- 📱 **响应式布局**：完美适配桌面和移动设备
- 🍕 **丰富菜单**：展示各种美味披萨供用户选择
- 🛒 **购物车管理**：轻松添加、修改和删除购物车中的商品
- 📋 **订单系统**：支持订单创建、查看订单状态和详情
- ⚡ **优先订单**：提供优先处理选项，加快配送速度
- 💰 **价格计算**：自动计算订单总金额，包括优先处理费用
- 📱 **用户信息管理**：保存用户信息，提供个性化体验

## 技术栈

- **前端框架**：React 18.3.1
- **类型系统**：TypeScript
- **构建工具**：Vite 6.0.5
- **路由管理**：React Router 6.30.1
- **状态管理**：Zustand 5.0.8
- **UI框架**：Tailwind CSS 3.4.18
- **代码质量**：ESLint、Prettier

## 快速开始

### 前置要求

- Node.js 18.x 或更高版本
- npm 或 yarn 包管理器

### 安装步骤

1. 克隆项目仓库
```bash
git clone <repository-url>
cd fast-pizza
```

2. 安装依赖
```bash
npm install
# 或
yarn install
```

3. 启动开发服务器
```bash
npm run dev
# 或
yarn dev
```

4. 构建生产版本
```bash
npm run build
# 或
yarn build
```

5. 预览生产版本
```bash
npm run preview
# 或
yarn preview
```

## 项目结构

```
├── src/
│   ├── components/       # 业务组件
│   │   ├── cart/         # 购物车相关组件
│   │   ├── menu/         # 菜单相关组件
│   │   ├── order/        # 订单相关组件
│   │   └── user/         # 用户相关组件
│   ├── router/           # 路由配置
│   ├── services/         # API服务
│   ├── store/            # 状态管理(Zustand)
│   ├── ui/               # UI组件
│   ├── utils/            # 工具函数
│   ├── App.tsx           # 应用入口组件
│   └── main.tsx          # 应用渲染入口
├── public/               # 静态资源
├── tailwind.config.js    # Tailwind配置
├── tsconfig.json         # TypeScript配置
└── vite.config.ts        # Vite配置
```

## 主要功能模块

### 1. 用户模块
- 用户信息输入和保存
- 个性化欢迎界面

### 2. 菜单模块
- 披萨列表展示
- 披萨详情查看
- 添加到购物车功能

### 3. 购物车模块
- 购物车商品列表
- 商品数量调整
- 清空购物车功能
- 前往结账按钮

### 4. 订单模块
- 订单信息填写（姓名、电话、地址）
- 优先订单选项
- 订单状态展示
- 订单详情查看
- 预计送达时间显示

## 路由结构

- `/` - 首页，用户欢迎界面
- `/menu` - 菜单页面，浏览披萨选项
- `/cart` - 购物车页面，管理已选商品
- `/order/new` - 创建订单页面，填写订单信息
- `/order/:orderId` - 订单详情页面，查看订单状态

## 开发命令

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run lint` - 运行代码检查
- `npm run preview` - 预览生产构建

## 贡献指南

1. Fork 项目仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 详见 LICENSE 文件

## 致谢

- 感谢 React 团队提供优秀的前端框架
- 感谢 Vite 团队提供快速的构建工具
- 感谢 Tailwind CSS 团队提供便捷的样式解决方案
- 感谢 Zustand 团队提供轻量级的状态管理库
- 感谢所有贡献者的努力和支持！
