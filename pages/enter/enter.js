// pages/enter/enter.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: '0'
  },
  exit_use:function () {
    console.log(this.data.index)
      if(this.data.index==='0'){
      this.setData({
        index:'1'
      })}
      else{
      this.setData({
        index: '0'
      })}
    },
  
  start_use: function(){
    wx.navigateTo({
      url: '../index/index',

      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        console.log("跳转成功")
      }
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

        var car_id = 1
    console.log(car_id)
    app.globalData.car_id = car_id;
    var prevExitState = this.exitState // 尝试获得上一次退出前 onSaveExitState 保存的数据
    if (prevExitState !== undefined) { // 如果是根据 restartStrategy 配置进行的冷启动，就可以获取到
      prevExitState.myDataField === 'myData'
    }
  
  },

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