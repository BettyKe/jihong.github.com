export const selectPlay = function({commit},{isLogin}){
    commit(setIsLogin, isLogin);//播放列表 = songs;
}