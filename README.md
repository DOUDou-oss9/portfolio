# 李诺谣的设计手账

中文静态作品集，包含作品分类、7 个项目详情、个人经历与邮箱联系。素材来自本人上传的作品集。

## 本地查看

```sh
python -m http.server 3000 --directory public
```

## 部署到 Vercel

仓库根目录的 vercel.json 指定 public 为输出目录，无需构建步骤。
在已登录 Vercel CLI 的环境执行：

```sh
npm_config_cache=/tmp/portfolio-npm-cache npx --yes vercel@latest --prod --yes
```

也可在 Vercel 控制台导入仓库，选择 Other 框架，输出目录 public，构建命令留空。

发布后应确认主页、作品分类、项目详情、手机布局、邮箱复制，以及匿名访问均可用。

未发布手机号、生日和原始简历。尚未配置自定义域名。
