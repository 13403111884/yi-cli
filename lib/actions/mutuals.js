import Fs from 'fs' // 文件操作
import Inqurer from 'inquirer' // 终端&用户 交互工具
import Handlebars from 'handlebars' // 模板引擎
import Chalk from 'chalk' // 文案颜色
import LogSymbols from 'log-symbols' // 状态图标
import { packageDemo } from './../config/paramsConfig' 

export const init = (projectName) => {
  const packageTemplate = `${projectName}/package.json`
  Inqurer.prompt([
    { ype: 'input', name: 'name', message: `请输入项目名称 (${projectName})`, default: projectName },
    { ype: 'input', name: 'version', message: `请输入项目版本 (0.1.0)`, default: '0.1.0' },
    { type: 'input', name: 'description', message: `请输入项目描述 ()`, default: '' },
    { type: 'input', name: 'nain', message: `请输入项目主文件 (index.js)`, default: 'index.js' },
    { type: 'input', name: 'author', message: `请输入项目开发人员 ()`, default: '' },
    { type: 'input', name: 'license', message: `请输入项目许可 (ISC)`, default: 'ISC' }
  ]).then(info => {
    try {
      return {
        packageConfig: Fs.readFileSync(packageTemplate, 'utf8'),
        info
      }
    } catch (e) {
      e && console.log(LogSymbols.info, Chalk.yellow('模板里不存在 package.json 文件, 创建了新的 package.json .'))
      return {
        packageConfig: packageDemo,
        info
      }
    }
  }).then(res => {
    const packageResult = Handlebars.compile(res.packageConfig)(res.info)
    Fs.writeFile(packageTemplate, packageResult, err => {
      if (err) {
        console.log(err)
        console.log(LogSymbols.error, Chalk.red('初始化模板失败, package.json 未生成'))
      } else {
        console.log(LogSymbols.success, Chalk.green('初始化模板完成'))
      }
    })
  })
}

export default {
  init
}