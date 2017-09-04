// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id + "--------------");
    var that = this;
    that.getMovieDetail(options.id);
  },
  getMovieDetail: function (id) {
    var that = this;
    var _url = "https://api.douban.com/v2/movie/subject/" + id;
    var _data = {};
    var _header = {
      'Content-Type': 'json'
    };
    wx.request({
      url: _url,
      data: _data,
      header: _header,
      success: function (res) {
        console.log(res.data);
        that.setData({
          movie:res.data
        })
      }
    })
  }
})