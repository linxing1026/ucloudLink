import Vue from "vue"
import VueI18n from "vue-i18n"
Vue.use(VueI18n)
const messages = {
    zh: {
        hello: "早上好",
        car: "没有车 | 一个车 | {count} 个车",
        name: "张三",
        age: "18",
        linkMsg: "@:name今年 @:age 岁了",//英文单词和汉字之间的空格会原样输出，没必要空开
        onlyChinese: "只有汉语有的信息",
        name: "赵{firstName}",
        apple: "{1} 个苹果",	//花括号中的数字相当于数组的下标
        Birthday: "生日",
        Basic: "基本用法"
    },
    en: {
        "hello": "good morning",
        "car": "no car | one car | {count} cars",
        name: "zhangsan",
        age: "18",
        linkMsg: "@:name is @:age years old",
        onlyEnglish: "only appear in English",
        name: "{firstName} Zhao",
        apple: "{1} apple",
        Birthday: "Birthday",
        Basic: "Basic Usage"
    }
}
const dateFormate = {
    "en": {
        short: {
            year: 'numeric', month: 'numeric', day: 'numeric'
        },
        long: {
            year: 'numeric', month: 'short', day: 'numeric',
            weekday: 'short', hour: 'numeric', minute: 'numeric'
        }
    },
    "zh": {
        sshort: {
            year: 'numeric', month: 'numeric', day: 'numeric'
        },
        long: {
            year: 'numeric', month: 'short', day: 'numeric',
            weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: true
        }
    }
}

const i18n = new VueI18n({
    locale: "zh",
    messages: messages,
    dateTimeFormats: dateFormate,//日期格式化$d
    fallbackLocale: "zh"
})
export default i18n;

