# GitHub Pages 配置指南

## 配置步骤

1. 登录 GitHub，进入仓库 `https://github.com/liyebin1220/ExamSimulation`

2. 点击仓库顶部的 `Settings` 选项卡

3. 在左侧导航栏中找到并点击 `Pages`

4. 在 `Build and deployment` 部分，选择部署来源：

   ### 选项 1：使用 GitHub Actions（推荐）
   - 从 `Source` 下拉菜单中选择 `GitHub Actions`
   - GitHub 将自动使用我们配置的 `.github/workflows/gh-pages.yml` 工作流进行部署

   ### 选项 2：从分支部署
   - 从 `Source` 下拉菜单中选择 `Deploy from a branch`
   - 从 `Branch` 下拉菜单中选择 `gh-pages` 分支
   - 从文件夹下拉菜单中选择 `/ (root)`

5. 点击 `Save` 按钮保存配置

## 验证部署

1. 配置完成后，GitHub Pages 会开始部署您的网站
2. 部署完成后，您可以通过以下 URL 访问网站：
   - `https://liyebin1220.github.io/ExamSimulation/`
3. 您可以在仓库的 `Actions` 选项卡中查看部署进度和日志

## 故障排除

- 如果遇到 404 错误，请确保：
  1. 部署已完成（可能需要几分钟时间）
  2. 已选择正确的分支和文件夹
  3. 仓库中有 `index.html` 文件

- 如果部署失败，请检查：
  1. GitHub Actions 工作流的日志
  2. 确保所有必要的文件都已提交到仓库
  3. 检查 `index.html` 文件是否存在且格式正确

如果您需要进一步的帮助，请随时联系。