
const mutations = {
    setIsLogin(state, flag){
        state.isLogin = flag;
    },
    setKeyWords(state, arr){
        state.keywords = arr;
        window.localStorage.setItem('keywords', arr)
    }
};

export default mutations;