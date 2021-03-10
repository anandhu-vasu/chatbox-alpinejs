import 'alpinejs'
const namespace = "KingSpinAI"

import template from './template'
import style from './style'
import * as app from './app'
import {addTemplate,addStyle} from './utils'


addStyle(style,namespace)

addTemplate(template,namespace)

window[namespace] = app
window[namespace].$status="NOT INITIALIZED"
window[namespace].$url="http://localhost:8000/api/"
window.$namespace = namespace