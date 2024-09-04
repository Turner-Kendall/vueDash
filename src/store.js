// store.js
import { reactive } from 'vue';

export const store = reactive({

  username: null,

  updateName(name) {
    this.username = name;
  },

  hasLogin: false,

  updateHasLogin(value) {
    this.hasLogin = value;
  },

  info: {},

  updateInfo(data) {
    const mergedData = {
      ...data,
      ...this.info
    }
    this.info = mergedData;
  }

})