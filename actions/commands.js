import DownloadGit from 'download-git-repo' // 下载git模板
import Ora from 'ora' // 进度
import { templates } from './../config/paramsConfig'
import Mutuals from './mutuals'

export const list = _ => {
  for (let item in templates) {
    console.log(`${item}  ${templates[item].description}`)
  }
}

export const init =(templateName, projectName) => {
  const { downloadUrl } = templates[templateName]
  const spinner = Ora('正在下载...').start()
  // 如果 projectName 已存在,创建会失败
  DownloadGit(downloadUrl, projectName, { clone: true }, err => {
    if (err) {
      console.log(err)
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