import DownloadGit from 'download-git-repo' // 下载git模板
import Ora from 'ora' // 进度
import Chalk from 'chalk' // 文案颜色
import LogSymbols from 'log-symbols' // 状态图标
import Table from 'text-table' // 列表输出
import { templates } from './../config/paramsConfig'
import Mutuals from './mutuals'

export const list = _ => {
  console.log(LogSymbols.info, chalk.blue('模板列表'))
  let arr = []
  for (let item in templates) {
    arr.push([item, templates[item].description])
  }
  const t = Table([
    ['模板名称', '模板叙述'],
    ...arr
  ], {
    hsep: ' ',
    align: ['l', 'l']
  })
  console.log(chalk.yellow(t))
}

export const init =(templateName, projectName) => {
  const { downloadUrl } = templates[templateName]
  const spinner = Ora('正在下载...').start()
  // 如果 projectName 已存在,创建会失败
  DownloadGit(downloadUrl, projectName, { clone: true }, err => {
    if (err) {
      console.log(err)
      console.log(LogSymbols.error, Chalk.red('下载模板失败'))
      spinner.fail()
      return
    }
    spinner.stop('下载完毕')
    Mutuals.init(projectName)
  })
}


export default {
  list,
  init
}