import Vue from 'vue';
import vuex from 'vuex';
import VueI18n from 'vue-i18n';
Vue.use(vuex);

const module1= {
    state: {
        username:'',
        userpass:''
    },
    mutations: {
        changeUser:(state, payload)=>{
          state.username = payload.username;
        },
        changePass:(state, payload)=>{
          state.userpass = payload.userpass;
        }
    },
    actions: {
        login: (state, preload) => {
            state.commit("changeUser", preload);
          state.commit("changePass", preload);
        }
    },
    getters: {
        user: function (state) {
            return {username:state.username,userpass:state.userpass}
        }
    }
}
const module2={
    state: {
        isLoading: false
    },
    mutations: {
        updateLoadingStatus(state, payload) {
            state.isLoading = payload.isLoading
        }
    }
}
const module3 = {
    state: {
        locale:""
      },
      mutations: {
        changeLanguage: (state, payload) => {
          state.locale = payload;
        }
      },
      actions: {
        changeLanguage: (state, preload) => {
          state.commit("changeLanguage", preload);
        }
      },
      getters: {
        locale: function (state) {
          return  state.locale;          
        }
      }

}

const store = new vuex.Store({
    /* modules: {
        i18n: vuexI18n.store
    }, */
    modules: {
        a: module1,
        ukx:module2,
        vueI18n:module3
    }
})

export default store;

//相当于包了一层
/* export default{
    store,
    i18n
} */
