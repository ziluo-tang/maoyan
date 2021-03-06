export default {
  pages: [
    'pages/home/index',
    'pages/cinema/index',
    'pages/user/index'
  ],
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: "pages/home/index",
        text: "电影",
        iconPath: './assets/image/home.png',
        selectedIconPath: './assets/image/home-selected.png'
      },
      {
        pagePath: "pages/cinema/index",
        text: "影院",
        iconPath: './assets/image/cinema.png',
        selectedIconPath: './assets/image/cinema-selected.png'
      },
      {
        pagePath: "pages/user/index",
        text: "我的",
        iconPath: './assets/image/mime.png',
        selectedIconPath: './assets/image/mime-selected.png'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
