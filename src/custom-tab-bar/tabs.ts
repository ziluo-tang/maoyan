import home from './../assets/image/home.png';
import home_selected from './../assets/image/home-selected.png';
import cinema from './../assets/image/cinema.png';
import cinema_selected from './../assets/image/cinema-selected.png';
import mime from './../assets/image/mime.png';
import mime_selected from './../assets/image/mime-selected.png';


export default [
  { text: "电影", image: home, selectedImage: home_selected, pagePath: '/pages/home/index' },
  { text: "影院", image: cinema, selectedImage: cinema_selected, pagePath: '/pages/cinema/index' },
  { text: "我的", image: mime, selectedImage: mime_selected, pagePath: '/pages/user/index' }
];