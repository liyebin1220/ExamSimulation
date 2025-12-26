# SAP Exam Simulation Tool

这是一个用于SAP BW/4HANA 2025考试的模拟工具，帮助用户练习和准备考试。

## 功能特点

- 模拟SAP BW/4HANA 2025考试环境
- 提供完整的题库系统
- 支持单选题、多选题等多种题型
- 实时显示答题进度和分数
- 提供详细的答题解析
- 响应式设计，支持多种设备

## 项目结构

```
BW4H202505T/
├── Original/          # 原始文件
│   ├── exam.html
│   ├── index.html
│   └── question-bank.html
├── QB/                # 题库文件
│   └── bw4h_2505_question_bank.json
├── axios.js           # Axios库
├── exam2.html         # 考试页面
├── i18n.js            # 国际化文件
├── index2.html        # 首页
├── question-bank2.html # 题库页面
└── vue.js             # Vue.js库
```

## 使用方法

1. 直接在浏览器中打开 `index2.html` 文件
2. 选择要练习的题目类型
3. 开始答题
4. 完成后查看得分和解析

## 技术栈

- Vue.js - 前端框架
- Axios - HTTP客户端
- HTML5/CSS3 - 页面结构和样式
- JSON - 数据存储格式

## 部署说明

### 本地部署

1. 下载项目文件
2. 在浏览器中直接打开 `index2.html` 文件即可使用

### GitHub Pages部署

1. 将项目上传到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择分支和目录（通常是main分支的根目录）
4. 等待部署完成后访问提供的URL

## 注意事项

- 本工具仅用于学习和练习，不能替代正式的SAP认证考试
- 题库内容可能会随着SAP考试大纲的更新而变化
- 建议结合SAP官方文档和培训材料一起使用

## 许可证

MIT License
