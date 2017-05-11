import Toast from './Toast.vue'

const toast={
    install:function(Vue){
        Vue.component('toast',Toast)
    }  //'Loading'这就是后面可以使用的组件的名字，install是默认的一个方法
};

export default toast;