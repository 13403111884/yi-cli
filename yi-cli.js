import program from 'commander'
import commands from './actions/commands'

program
  .version('0.0.1', '-v, --version', '获取版本号')

program
  .command('list')
  .description('列出所有模板')
  .alias('l')
  .action(() => {
    commands.list()
  })

program
  .command('init <templateName> <projectName>')
  .description('初始化模板 <模板名称> <项目名称>')
  .alias('i')
  .action((templateName, projectName) => {
    commands.init(templateName, projectName)
  })

program.parse(process.argv)
