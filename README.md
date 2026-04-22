# Nugget Community Gateway

这个仓库提供一个适合 GitHub Pages 使用的 Nugget 多语言社区导航页，页面文件位于 [`docs/`](./docs/) 目录。默认语言为英文，并提供日语、韩语、俄语、泰语、越南语、繁体中文台湾、繁体中文香港页面。

## 访问入口

- [English](./docs/index.html)
- [日本語](./docs/ja/index.html)
- [한국어](./docs/ko/index.html)
- [Русский](./docs/ru/index.html)
- [ไทย](./docs/th/index.html)
- [Tiếng Việt](./docs/vi/index.html)
- [繁體中文（台灣）](./docs/zh-TW/index.html)
- [繁體中文（香港）](./docs/zh-HK/index.html)

## 页面内容

GitHub Pages 页面面向普通用户，聚合 Nugget 官网 sitemap 中的核心入口：多语言首页、下载、资源和更新日志。页面还链接 [Motion Wallpaper 动态壁纸库](https://mwallx.com)、[Cowabun.ga](https://cowabun.ga)、[Pocket Poster](https://github.com/leminlimez/Pocket-Poster) 与 [Nugget 官方 GitHub 仓库](https://github.com/leminlimez/Nugget)。

常用官方入口：

- [Nugget 官方社区官网](https://nugget.host)
- [Nugget 英文下载页](https://nugget.host/en/download)
- [Nugget 英文资源页](https://nugget.host/en/resource)
- [Nugget 英文更新日志](https://nugget.host/en/change-log)
- [Motion Wallpaper 动态壁纸库](https://mwallx.com)
- [Nugget GitHub Releases](https://github.com/leminlimez/Nugget/releases)

页面适合搜索以下主题：

- Nugget iOS
- Nugget download
- leminlimez Nugget
- iOS customization without jailbreak
- 无越狱 iOS 自定义
- Dynamic Island 和 Status Bar tweaks
- PosterBoard wallpaper
- Motion Wallpaper 壁纸库
- Pocket Poster
- Cowabunga / Cowabun.ga
- SparseRestore、BookRestore、MobileGestalt
- iOS 17、iOS 18、iOS 26 自定义

## 国际化

默认页面是英文：[`docs/index.html`](./docs/index.html)。

已支持的语言页面：

- `en`: [`docs/index.html`](./docs/index.html)
- `ja`: [`docs/ja/index.html`](./docs/ja/index.html)
- `ko`: [`docs/ko/index.html`](./docs/ko/index.html)
- `ru`: [`docs/ru/index.html`](./docs/ru/index.html)
- `th`: [`docs/th/index.html`](./docs/th/index.html)
- `vi`: [`docs/vi/index.html`](./docs/vi/index.html)
- `zh-TW`: [`docs/zh-TW/index.html`](./docs/zh-TW/index.html)
- `zh-HK`: [`docs/zh-HK/index.html`](./docs/zh-HK/index.html)

每个语言页面都包含独立的 `html lang`、`canonical`、`hreflang`、Open Graph、Twitter Card 和 JSON-LD 结构化数据。[`docs/sitemap.xml`](./docs/sitemap.xml) 也列出了所有语言页面。

## GitHub Pages

仓库已按 GitHub Pages 的 `docs` 目录模式组织：

- [`docs/index.html`](./docs/index.html)：默认英文用户入口页
- [`docs/assets/site.css`](./docs/assets/site.css)：共享样式
- [`docs/ja/`](./docs/ja/)、[`docs/ko/`](./docs/ko/)、[`docs/ru/`](./docs/ru/)、[`docs/th/`](./docs/th/)、[`docs/vi/`](./docs/vi/)、[`docs/zh-TW/`](./docs/zh-TW/)、[`docs/zh-HK/`](./docs/zh-HK/)：多语言页面
- [`docs/robots.txt`](./docs/robots.txt)：搜索引擎抓取规则
- [`docs/sitemap.xml`](./docs/sitemap.xml)：GitHub Pages 多语言 sitemap
- [`docs/googleb61c8f82012ad232.html`](./docs/googleb61c8f82012ad232.html)：Google 站点验证文件

在 GitHub 仓库设置中，将 Pages Source 设为 `Deploy from a branch`，分支选择 `main`，目录选择 `/docs`。

## 官方来源

本页面以 [nugget.host sitemap](https://nugget.host/sitemap.xml)、[Nugget 官网](https://nugget.host)、[Nugget 资源页](https://nugget.host/en/resource)、[Nugget 下载页](https://nugget.host/en/download)、[Nugget 更新日志](https://nugget.host/en/change-log) 和 [Motion Wallpaper](https://mwallx.com) 作为主要入口来源。

## 维护

多语言页面由 [`scripts/build-i18n-pages.mjs`](./scripts/build-i18n-pages.mjs) 生成。更新文案、语言列表、SEO 元信息或站点链接后，运行：

```bash
node scripts/build-i18n-pages.mjs
```
