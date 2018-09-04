import Toast from '../../dist/w-toast/toast.js';
Page({
  top() {
    Toast.show({
      position: 'top',
      message: 'top',
    });
  },
  middle() {
    Toast.show({
      position: 'middle',
      message: 'middle',
    });
  },
  bottom() {
    Toast.show({
      position: 'bottom',
      message: 'bottom',
    });
  },

  default() {
    Toast.show({
      message: 'wuss小程序UI库',
    });
  },
  success() {
    Toast.show({
      type: '',
      message: '成功',
    });
  },
  loading() {
    Toast.show({
      type: '',
      message: '模块加载中',
    });
  },
  thenClose() {
    Toast.show({ message: '完成后打印 close ' }).then(() => {
      console.log('close');
    });
  },
  useHide() {
    const wussToast = Toast.show({ message: '2.5s 后关闭 Toast', duration: 0 });
    wussToast.then(() => {
      console.log('close');
    });
    setTimeout(wussToast.hide, 2500);
  },
});
