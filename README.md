# Academic 2048 / 学术2048

正式发布版：**v7.0.0**  
发布日期：**2026-09-27**  
作者：**Han Yitong / 韩易桐**

## 玩法

从 `2 幼儿园` 开始，通过 2048 式合并逐级达到：

幼儿园 → 小学生 → 初中生 → 高中生 → 本科生 → 硕士 → 博士 → 博后 → 青椒 → 副教授 → 教授 → 优青 → 杰青 → 院士 → 诺奖得主（32768）。

阶段事件由当前棋盘最高等级动态决定。

## 发布

这是纯静态网站，不需要后端。

### GitHub Pages
1. 将本目录全部文件上传到 GitHub 仓库根目录。
2. Repository Settings → Pages。
3. Source 选择 Deploy from a branch，选择 `main / root`。
4. 等待 Pages URL 生效。

### Vercel / Cloudflare Pages
直接导入仓库即可。无构建命令，输出目录为仓库根目录。

## 反馈入口配置

编辑 `site-config.js`：

- 推荐填写 GitHub Issues：
  `feedbackUrl: "https://github.com/YOUR_USERNAME/academic-2048/issues/new"`
- 或填写公开邮箱：
  `feedbackEmail: "your@email.com"`

若两者都为空，网页仍会生成结构化反馈，并尝试通过系统分享或剪贴板提供给玩家。

## 自定义

`site-config.js` 还可修改：
- 作者
- 版本
- 发布日期
- 源码地址

## 发布前 QA

建议至少测试：
- Chrome / Edge
- Safari（iPhone）
- 微信内置浏览器
- Android Chrome
- 快速连续滑动
- 正/负面事件
- 冻结格解除
- 满盘失败
- 32768 胜利
- 刷新后最高分保留
- 分享、反馈、音效按钮
- PWA 安装与离线打开

## 声明与致谢

本项目为非官方娱乐作品。游戏内的教育、职称、人才项目与学术荣誉仅作娱乐化等级设计，不代表真实制度晋升关系。

玩法受 **2048 by Gabriele Cirulli** 启发。若未来直接引入或复制第三方开源代码，请同时遵守其对应许可证和版权声明。

本项目未使用 Nobel Prize 官方 Logo、奖章或官方视觉资产。
