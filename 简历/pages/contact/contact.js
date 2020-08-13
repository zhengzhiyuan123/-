// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    imglist:['http://m.qpic.cn/psc?/V53PNrkp0VCm7j3BfJRm3yKGct2W8zQZ/ruAMsa53pVQWN7FLK88i5raynepT.o9mrOUd7hjp5bEludbMtlwcmzjN0ovhbm81xOGZgANxB1mLTgOqqOkc36NRB7FlbekT.PDKFUa9co0!/mnull&bo=OAR2BTgEdgUBByA!&rf=photolist&t=5','http://m.qpic.cn/psc?/V53PNrkp0VCm7j3BfJRm3yKGct2W8zQZ/ruAMsa53pVQWN7FLK88i5h7Rq5Ev9z6Px*Xexx1UdHK4NdXnh.K1wHkcEnP9RhWAAPTCUaR0KbBuvQWHQR0qx8IHuU1qnT.lcliExeDZmkA!/mnull&bo=OASABzgEgAcBByA!&rf=photolist&t=5'],
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imglist // 需要预览的图片http链接列表  
    })
  } , 
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
