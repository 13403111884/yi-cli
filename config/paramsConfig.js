export const templates = {
  "tpl-1": {
    name: 'tpl-1',
    description: 'vue',
    url: 'https://github.com/13403111884/tpl-1',
    downloadUrl: 'https://github.com:13403111884/tpl-1#master'
  },
  "tpl-2": {
    name: 'tpl-2',
    description: 'meteor',
    url: 'https://github.com/13403111884/tpl-2.git',
    downloadUrl: 'https://github.com:13403111884/tpl-2#master'
  },
  "tpl-3": {
    name: 'tpl-1',
    description: 'cordova',
    url: 'https://github.com/13403111884/tpl-3.git',
    downloadUrl: 'https://github.com:13403111884/tpl-3#master'
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