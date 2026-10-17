# 李诺谣 · 视觉设计作品集

个人设计网站，基于 Vite 与原生 JavaScript / CSS，使用简历及作品集 PDF 中的真实内容与图片。

## 本地开发

需要 Node.js 20.19+ 或 22.12+（当前验证版本为 24.19.0）。

```bash
npm ci --cache /workspace/.npm-cache
npm run dev -- --port 5173
```

## 构建与预览

```bash
npm run build
npm run preview -- --port 4173
```

构建输出为 `dist/`，可发布到静态网站托管服务。页面通过 hash 路由切换，无需服务器重写规则。

## 内容维护

- `src.js`：项目信息、页面结构和交互。
- `style.css`：桌面及移动端视觉样式。
- `public/images/`：从作品集导出的 WebP 图片。
- `public/downloads/`：简历和作品集 PDF。

网站字体通过 Google Fonts 加载，网络不可用时回退到系统字体。

发布前请核对项目文字及个人信息公开范围；当前下载文件保留原始上传内容。网站已实现邮箱联系，未加入未经验证的微信二维码。

## 部署到 Vercel

项目包含 `vercel.json`，构建命令为 `npm run build`，输出目录为 `dist`。
在已登录 Vercel 的终端内执行：

```bash
npx vercel login
npx vercel --prod
```

首次部署时将项目关联到自己的 Vercel 账号，并按命令输出获取真实的 production URL。不要将尚未创建的域名视为已部署链接。
