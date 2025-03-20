import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

interface UserInfo {
  user_acc: string;
  username: string;
  sex: number;
  age: number;
  user_id: number;
}
export const useUserInfo= defineStore('userInfo', () => {
  const token = ref(localStorage.getItem("token") || ''); // token
  const userInfoCache = JSON.parse(localStorage.getItem("userInfo") || '{}'); // 用户信息
  const userInfo = ref<UserInfo | string>({
    user_acc: userInfoCache?.user_acc || '',
    username: userInfoCache?.username || '',
    sex: Number.parseInt(userInfoCache?.sex || 0), // 性别，0女1男
    age: Number.parseInt(userInfoCache?.age || 0), // 年龄
    user_id: userInfoCache?.user_id || '',
  })

  const ageIndexKey = reactive([
    { text: '20~30', value: 0 },
    { text: '30~40', value: 1 },
    { text: '40~50', value: 2 },
    { text: '50~60', value: 3 },
    { text: '60+', value: 4 }
  ])


  /**
   * 更新token
   * @param tokenVal token值
  */
  function updateToken(tokenVal: string): void  {
    token.value = tokenVal;
    window.localStorage.setItem('token', token.value);
  }

  /**
   * 更新用户信息
   * @param userInfoVal userInfoVal值
  */
  function updateUserInfo(userInfoVal:UserInfo | string): void {
    console.log('更新了用户信息:', userInfoVal);
    
    if (<string>userInfoVal == '') {
      for (let key in userInfo) {
        userInfo[key] = '';
      }
    } else {
      userInfo.user_acc = (userInfoVal as UserInfo).user_acc;
      userInfo.username = (userInfoVal as UserInfo).username;
      userInfo.sex = (userInfoVal as UserInfo).sex;
      userInfo.age = (userInfoVal as UserInfo).age;
      userInfo.user_id = (userInfoVal as UserInfo).user_id;
    }
    window.localStorage.setItem('userInfo', JSON.stringify({
      user_acc: userInfo.user_acc,
      username: userInfo.username,
      sex: userInfo.sex,
      age: userInfo.age,
      user_id: userInfo.user_id,
    }));
  }

  return { token, updateToken, userInfo, updateUserInfo, ageIndexKey }
})
