import lowercasefilter from './lowercasefilter'
import uppercasefilter from './uppercasefilter'


export default{
    install(Vue) {
        Vue.filter('lowercasefilter', lowercasefilter);
        Vue.filter('uppercasefilter', uppercasefilter);

    }
}