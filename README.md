# GSAP (GreenSock 动画平台)

[![GSAP -  animate anything](https://gsap.com/GSAP-share-image.png)](https://gsap.com)

GSAP 是一个**框架无关的** JavaScript 动画库，能让开发者变身动画超级英雄。构建可在**所有**主流浏览器中运行的高性能动画。可以对 CSS、SVG、canvas、React、Vue、WebGL、颜色、字符串、运动路径、通用对象等进行动画处理……一切 JavaScript 能触及的对象！GSAP 的 <a href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/">ScrollTrigger</a> 插件能以极少的代码实现令人惊叹的滚动动画。<a href="https://gsap.com/docs/v3/GSAP/gsap.matchMedia()">gsap.matchMedia()</a> 则让构建响应式、无障碍友好的动画变得轻而易举。

没有其他库能同时提供如此先进的序列编排、可靠性和精细控制，同时还能解决超过 1200 万个网站上的实际问题。GSAP 能绕过无数浏览器兼容性问题；你的动画***就是能正常运行***。GSAP 的核心是一个高速属性操纵器，能以极高精度随时间更新数值。它的速度比 jQuery 快 20 倍！

GSAP 完全灵活；可以在任何地方使用它。**零依赖。**

有许多可选的 <a href="https://gsap.com/docs/v3/Plugins">插件</a> 和 <a href="https://gsap.com/docs/v3/Eases">缓动</a> 函数，可以轻松实现高级效果，如<a href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/">滚动</a>、<a href="https://gsap.com/docs/v3/Plugins/MorphSVGPlugin">变形</a>、[文本拆分](https://gsap.com/docs/v3/Plugins/SplitText)、沿<a href="https://gsap.com/docs/v3/Plugins/MotionPathPlugin">运动路径</a>动画或 <a href="https://gsap.com/docs/v3/Plugins/Flip/">FLIP</a> 动画。甚至还有一个方便的 <a href="https://gsap.com/docs/v3/Plugins/Observer/">Observer</a>，用于在浏览器/设备间标准化事件检测。


### 入门指南

[![GSAP 入门](https://gsap.com/_img/github/get-started.jpg)](https://gsap.com/get-started)


## 文档与安装

查看<a href="https://gsap.com/docs">完整文档</a>，其中包含<a href="https://gsap.com/install">安装指南</a>。

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/gsap.min.js"></script>
```

访问 <a href="https://www.jsdelivr.com/gsap">JSDelivr 的 GSAP 专属页面</a>，可快速获取核心文件和插件的 CDN 链接。gsap.com 上还有更多<a href="https://gsap.com/install">安装说明</a>。

**所有主要广告网络都将 GSAP 排除在文件大小计算之外**，大多数网络还在其自有 CDN 上托管了 GSAP，因此请联系他们获取相应的 URL。

### NPM
在此查看<a href="https://gsap.com/install">通过 NPM 使用 GSAP 的指南</a>。

```javascript
npm install gsap
```

GSAP 的核心几乎可以对任何东西进行动画处理，包括 CSS 和属性，它还包含所有<a href="https://gsap.com/docs/v3/GSAP/UtilityMethods">实用方法</a>，例如 <a href="https://gsap.com/docs/v3/GSAP/UtilityMethods/interpolate()">interpolate()</a>、<a href="https://gsap.com/docs/v3/GSAP/UtilityMethods/mapRange()">mapRange()</a>，大多数<a href="https://gsap.com/docs/v3/Eases">缓动函数</a>，并且支持取值和修饰器。

```javascript
// 典型导入方式
import gsap from "gsap";

// 获取其他插件：
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";

// 或者从 "all" 文件中导出所有工具（会员专属插件除外）：
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

// 别忘了注册插件
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin); 
```

NPM 文件是 ES 模块，但还有包含 <a href="https://www.davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/">UMD</a> 文件的 /dist/ 目录，以提供额外的兼容性。

## GSAP 完全免费！

感谢 [Webflow](https://webflow.com)，GSAP 现在**100% 免费**，包括所有高级插件如 [SplitText](https://gsap.com/docs/v3/Plugins/SplitText)、[MorphSVG](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin) 以及其他专属 Club GSAP 会员才能使用的功能。没错——整套 GSAP 工具集完全免费，即使是商业用途！🤯  点击[这里](https://webflow.com/blog/gsap-becomes-free)了解更多。

### ScrollTrigger 与 ScrollSmoother

如果你在寻找滚动驱动的动画，GSAP 的 <a href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/">ScrollTrigger</a> 插件是行业标准。还有一个配套的 <a href="https://gsap.com/docs/v3/Plugins/ScrollSmoother/">ScrollSmoother</a>。

[![ScrollTrigger](https://gsap.com/_img/github/scrolltrigger.jpg)](https://gsap.com/docs/v3/Plugins/ScrollTrigger)

### 使用 React？

有一个 <a href="https://www.npmjs.com/package/@gsap/react">@gsap/react</a> 包，提供了 `useGSAP()` Hook，可直接替代 `useEffect()`/`useLayoutEffect()`，自动完成清理任务。详情请阅读 <a href="https://gsap.com/react">React 指南</a>。

### 资源

* <a href="https://gsap.com/">gsap.com</a>
* <a href="https://gsap.com/get-started/">入门指南</a>
* <a href="https://gsap.com/docs/">文档</a>
* <a href="https://gsap.com/demos">演示与入门模板</a>
* <a href="https://gsap.com/community/">社区论坛</a>
* <a href="https://gsap.com/docs/v3/Eases">缓动可视化工具</a>
* <a href="https://gsap.com/showcase">案例展示</a>
* <a href="https://www.youtube.com/@GreenSockLearning">YouTube 频道</a>
* <a href="https://gsap.com/cheatsheet">速查表</a>
* <a href="https://webflow.com">Webflow</a>

### 需要帮助？

在友好的 <a href="https://gsap.com/community/">GSAP 论坛</a>中提问。或者分享你的知识去帮助别人——这是提升技能的好方法！也可以在那里报告任何 bug（如果你 href="https://github.com/greensock/GSAP提交 issue</a>）。

### 许可证
GreenSock 的标准"免费使用"许可证可在 <a href="https://gsap.com/standard-license">https://gsap.com/standard-license</a> 查看

Copyright (c) 2008-2026, GreenSock. All rights reserved.
