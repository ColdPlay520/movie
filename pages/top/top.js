//top.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../assets/imgs/1.jpg',
      '../../assets/imgs/2.jpg',
      '../../assets/imgs/3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 2000
  },

  onLoad: function () {
    var that = this;
    that.getMovies();
  },
  //调用豆瓣API获得正在热映数据
  getMovies: function () {
    wx.showLoading({
      title: '别急，客官，数据马上加载好!',
    })
    var that = this;
    var _url = "https://api.douban.com/v2/movie/top250";
    var _data = {
      city: '广州'
    };
    var _header = {
      'Content-Type': 'json'
    };
    wx.request({
      url: _url,
      data: _data,
      header: _header,
      success: function (res) {
        console.log(res.data);
        wx.hideLoading();
        that.setData({
          subjects: res.data.subjects
        });
      }
    })
  },
  toDetail: function (e) {
    console.log(e.currentTarget.id);
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.id,
    })
  }

})
