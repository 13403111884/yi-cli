export const templates = {
  "meteor-vue": {
    name: 'meteor-vue',
    description: '引入 vue 的 meteor 模板',
    url: 'https://github.com/13403111884/meteor-vue',
    downloadUrl: 'https://github.com:13403111884/meteor-vue#master'
  },
  "meteor-webpack-vue": {
    name: 'meteor-webpack-vue',
    description: '引入 vue 以 webpack 为包管理工具的 meteor 模板',
    url: 'https://github.com/13403111884/meteor-webpack-vue',
    downloadUrl: 'https://github.com:13403111884/meteor-webpack-vue#master'
  },
  "vue-electron": {
    name: 'vue-electron',
    description: '以 vue 开发客户端的模板',
    url: 'https://github.com/13403111884/vue-electron',
    downloadUrl: 'https://github.com:13403111884/vue-electron#master'
  },
  "vue-cordova": {
    name: 'vue-cordova',
    description: '以 vue 移动端APP的模板',
    url: 'https://github.com/13403111884/vue-cordova',
    downloadUrl: 'https://github.com:13403111884/vue-cordova#master'
  }
}

export const packageDemo = `{
  "name": "{{ name }}",
  "version": "{{ version }}",
  "description": "{{ description }}",
  "main": "{{ nain }}",
  "scripts": {
    "test": "echo \'Error: no test specified\' && exit 1"
  },
  "author": "{{ author }}",
  "license": "{{ license }}"
}`

export default {
  templates,
  packageDemo
}