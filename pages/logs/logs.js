//logs.js
const util = require('../../utils/util.js')
const scale = wx.getSystemInfoSync().windowWidth / 375
const app = getApp()
Page({
    data: {
      car_position: '',
        logs: [],
        array: ['A1', 'A2', '未定..', '未定..'],
        index: '404',
      location: [],
      car_space: [{
      car_id: 0,
        car_position: [{
          id: 0,
          number_x: 290,
          number_y: 184,
          number_width: 30,
          number_height: 16,
          number_rote: 0

        }],
        direction: [{
          id: 0,
          point_1x: 80,
          point_1y: 210,
          point_2x: 98,
          point_2y: 170,
          point_3x: 250,
          point_3y: 170,
          point_4x: 290,
          point_4y: 190
        },
        {
          id: 1,
          point_1x: 300,
          point_1y: 400,
          point_2x: 300,
          point_2y: 200,
          point_3x: 300,
          point_3y: 200,
          point_4x: 300,
          point_4y: 200

        }
        ]
      },
        {
          car_id: 1,
          car_position: [{
            id: 0,
            number_x: 290,
            number_y: 165,
            number_width: 30,
            number_height: 16,
            number_rote: 0
          }],
          direction: [{
            id: 0,
            point_1x: 80,
            point_1y: 210,
            point_2x: 98,
            point_2y: 172,
            point_3x: 250,
            point_3y: 172,
            point_4x: 290,
            point_4y: 172
          },
          {
            id: 1,
            point_1x: 300,
            point_1y: 400,
            point_2x: 300,
            point_2y: 200,
            point_3x: 300,
            point_3y: 200,
            point_4x: 300,
            point_4y: 172

          }
          ]
        },
        {
          car_id: 2,
          car_position: [{
            id: 0,
            number_x: 290,
            number_y: 145,
            number_width: 30,
            number_height: 16

          }],
          direction: [{
            id: 0,
            point_1x: 80,
            point_1y: 210,
            point_2x: 98,
            point_2y: 152,
            point_3x: 250,
            point_3y: 152,
            point_4x: 290,
            point_4y: 152
          },
          {
            id: 1,
            point_1x: 300,
            point_1y: 400,
            point_2x: 300,
            point_2y: 200,
            point_3x: 300,
            point_3y: 200,
            point_4x: 300,
            point_4y: 150

          }
          ]
        },
        {
          car_id: 3,
          car_position: [{
            id: 0,
            number_x: 378,
            number_y: 77,
            number_width: 16,
            number_height: 30,
            number_rote:35

          }],
          direction: [{
            id: 0,
            point_1x: 180,
            point_1y: 120,
            point_2x: 200,
            point_2y: 60,
            point_3x: 388,
            point_3y: 60,
            point_4x: 388,
            point_4y: 77
          },
          {
            id: 1,
            point_1x: 430,
            point_1y: 80,
            point_2x: 410,
            point_2y: 60,
            point_3x: 388,
            point_3y: 60,
            point_4x: 388,
            point_4y: 77

          }
          ]
        },
        {
          car_id: 4,
          car_position: [{
            id: 0,
            number_x: 334,
            number_y: 76,
            number_width: 16,
            number_height: 30,
            number_rote: 35

          }],
          direction: [{
            id: 0,
            point_1x: 180,
            point_1y: 120,
            point_2x: 200,
            point_2y: 60,
            point_3x: 340,
            point_3y: 60,
            point_4x: 340,
            point_4y: 77
          },
          {
            id: 1,
            point_1x: 430,
            point_1y: 80,
            point_2x: 410,
            point_2y: 60,
            point_3x: 340,
            point_3y: 60,
            point_4x: 340,
            point_4y: 77

          }
          ]
        },
        {
          car_id: 5,
          car_position: [{
            id: 0,
            number_x: 315,
            number_y: 71,
            number_width: 16,
            number_height: 30,
            number_rote: 36

          }],
          direction: [{
            id: 0,
            point_1x: 180,
            point_1y: 120,
            point_2x: 200,
            point_2y: 56,
            point_3x: 322,
            point_3y: 56,
            point_4x: 322,
            point_4y: 71
          },
          {
            id: 1,
            point_1x: 430,
            point_1y: 80,
            point_2x: 410,
            point_2y: 60,
            point_3x: 322,
            point_3y: 56,
            point_4x: 322,
            point_4y: 71

          }
          ]
        },
        {
          car_id: 6,
          car_position: [{
            id: 0,
            number_x: 296,
            number_y: 70,
            number_width: 16,
            number_height: 30,
            number_rote: 36.2

          }],
          direction: [{
            id: 0,
            point_1x: 180,
            point_1y: 120,
            point_2x: 200,
            point_2y: 56,
            point_3x: 305,
            point_3y: 56,
            point_4x: 305,
            point_4y: 71
          },
          {
            id: 1,
            point_1x: 430,
            point_1y: 80,
            point_2x: 410,
            point_2y: 60,
            point_3x: 305,
            point_3y: 56,
            point_4x: 305,
            point_4y: 71

          }
          ]
        },
        {
          car_id: 7,
          car_position: [{
            id: 0,
            number_x: 276,
            number_y: 70,
            number_width: 16,
            number_height: 30,
            number_rote: 36.2

          }],
          direction: [{
            id: 0,
            point_1x: 180,
            point_1y: 120,
            point_2x: 200,
            point_2y: 56,
            point_3x: 283,
            point_3y: 56,
            point_4x: 283,
            point_4y: 71
          },
          {
            id: 1,
            point_1x: 430,
            point_1y: 80,
            point_2x: 410,
            point_2y: 60,
            point_3x: 283,
            point_3y: 56,
            point_4x: 283,
            point_4y: 71

          }
          ]
        },
        {
          car_id: 8,
          car_position: [{
            id: 0,
            number_x: 241,
            number_y: 70,
            number_width: 30,
            number_height: 16,
            number_rote: 36.2

          }],
          direction: [{
            id: 0,
            point_1x: 180,
            point_1y: 120,
            point_2x: 200,
            point_2y: 56,
            point_3x: 252,
            point_3y: 56,
            point_4x: 252,
            point_4y: 71
          },
          {
            id: 1,
            point_1x: 430,
            point_1y: 80,
            point_2x: 410,
            point_2y: 60,
            point_3x: 252,
            point_3y: 56,
            point_4x: 252,
            point_4y: 71

          }
          ]
        },
        {
          car_id: 9,
          car_position: [{
            id: 0,
            number_x: 208,
            number_y: 70,
            number_width: 30,
            number_height: 16,
            number_rote: 36.2

          }],
          direction: [{
            id: 0,
            point_1x: 180,
            point_1y: 120,
            point_2x: 200,
            point_2y: 56,
            point_3x: 223,
            point_3y: 56,
            point_4x: 223,
            point_4y: 71
          },
          {
            id: 1,
            point_1x: 430,
            point_1y: 80,
            point_2x: 410,
            point_2y: 60,
            point_3x: 223,
            point_3y: 56,
            point_4x: 223,
            point_4y: 71

          }
          ]
        },
        {
          car_id: 10,
          car_position: [{
            id: 0,
            number_x: 47,
            number_y: 162,
            number_width: 34,
            number_height: 18,
            number_rote: 0

          }],
          direction: [{
            id: 0,
            point_1x: 73,
            point_1y: 230,
            point_2x: 73,
            point_2y: 230,
            point_3x: 73,
            point_3y: 230,
            point_4x: 73,
            point_4y: 180
          },
          {
            id: 1,
            point_1x: 300,
            point_1y: 320,
            point_2x: 300,
            point_2y: 280,
            point_3x: 120,
            point_3y: 160,
            point_4x: 74,
            point_4y: 175

          }
          ]
        },
        {
          car_id: 11,
          car_position: [{
            id: 0,
            number_x: 46,
            number_y: 138.5,
            number_width: 34,
            number_height: 18,
            number_rote: 0

          }],
          direction: [{
            id: 0,
            point_1x: 73,
            point_1y: 230,
            point_2x: 73,
            point_2y: 230,
            point_3x: 73,
            point_3y: 230,
            point_4x: 73,
            point_4y: 138
          },
          {
            id: 1,
            point_1x: 300,
            point_1y: 320,
            point_2x: 300,
            point_2y: 280,
            point_3x: 120,
            point_3y: 160,
            point_4x: 74,
            point_4y: 142

          }
          ]
        },
        {
          car_id: 12,
          car_position: [{
            id: 0,
            number_x: 46,
            number_y: 116.5,
            number_width: 34,
            number_height: 18,
            number_rote: 0

          }],
          direction: [{
            id: 0,
            point_1x: 73,
            point_1y: 230,
            point_2x: 73,
            point_2y: 230,
            point_3x: 73,
            point_3y: 230,
            point_4x: 73,
            point_4y: 134
          },
          {
            id: 1,
            point_1x: 300,
            point_1y: 320,
            point_2x: 300,
            point_2y: 280,
            point_3x: 120,
            point_3y: 160,
            point_4x: 74,
            point_4y: 124

          }
          ]
        },
        {
          car_id: 12,
          car_position: [{
            id: 0,
            number_x: 46,
            number_y: 93.5,
            number_width: 34,
            number_height: 18,
            number_rote: 0

          }],
          direction: [{
            id: 0,
            point_1x: 73,
            point_1y: 230,
            point_2x: 73,
            point_2y: 230,
            point_3x: 73,
            point_3y: 230,
            point_4x: 73,
            point_4y: 100
          },
          {
            id: 1,
            point_1x: 300,
            point_1y: 320,
            point_2x: 300,
            point_2y: 280,
            point_3x: 120,
            point_3y: 160,
            point_4x: 79,
            point_4y: 95

          }
          ]
        }
      ]
        



    },
    bindPickerChange: function(e) {
      //   console.log('picker发送选择改变，携带值为', e.detail.value)
      // console.log(this.data.car_position[0].number_x)
        var index = e.detail.value
        this.setData({
            index: e.detail.value
        })

      this.create_line(this.data.location[index].point_1x, this.data.location[index].point_1y, this.data.location[index].point_2x, this.data.location[index].point_2y, this.data.location[index].point_3x, this.data.location[index].point_3y, this.data.location[index].point_4x, this.data.location[index].point_4y, this.data.car_position[0].number_x, this.data.car_position[0].number_y, this.data.car_position[0].number_width, this.data.car_position[0].number_height, this.data.car_position[0].number_rote)

    },
    remSize: function(num) {
        return num * scale
    },
  create_line: function (point_1x, point_1y, point_2x, point_2y, point_3x, point_3y, point_4x, point_4y, number_x, number_y, number_width, number_height, number_rote) {
        const context = wx.createCanvasContext('firstCanvas')
        context.setStrokeStyle("#00ff00")
        context.setLineWidth(5)
    context.rotate(number_rote*Math.PI/180)
    context.rect(this.remSize(number_x), this.remSize(number_y), this.remSize(number_width), this.remSize(number_height))
        context.setFillStyle('#48DD22')
        context.setStrokeStyle("#48DD22")
        context.fill()
        context.setLineWidth(2)
        context.setShadow(0, 0, 12, '#48DD22')
        context.moveTo(this.remSize(point_1x), this.remSize(point_1y))
        context.lineTo(this.remSize(point_2x), this.remSize(point_2y))
        context.lineTo(this.remSize(point_3x), this.remSize(point_3y))
        context.lineTo(this.remSize(point_4x), this.remSize(point_4y))
        context.stroke()
        context.draw()
        // console.log(this.remSize(30))

    },
    draw_line: function() {

    },

    onLoad: function(options) {
      // var scene = decodeURIComponent(options.scene)//参数二维码传递过来的参数
      // var query = options.query.dentistId // 参数二维码传递过来的场景参数
      console.log(app.globalData.car_id)
      var car_id = app.globalData.car_id
      console.log(car_id)
      wx.showLoading({
        title: '加载中',
      })
      var that = this
         this.setData({
            logs: (wx.getStorageSync('logs') || []).map(log => {
                return util.formatTime(new Date(log))
            })
        })
      var res_data = this.data.car_space[car_id]
      console.log(res_data)
      that.setData({
        car_position: res_data.car_position,
         location: res_data.direction
               })
      wx.hideLoading();
        // wx.request({
        //     // Node 运行
        //   // url: 'http://127.0.0.1:8080/user?id=' + this.data.index,
        //    url: 'http://106.15.205.9:8080/user?id=' + this.data.index,
        //   // url: 'https://www.getpostman.com/collections/b6ec2d2bf04a9221621c',
        //     header: {
        //         // Node 运行
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     },
         
        //     success: function(res) {
        //       wx.hideLoading();
        //       console.log(res.data.car_space[0])
        //       var res_data = res.data.car_space[car_id]
        //       // var resdata=JSON.parse(res.data.description)
        //       //      console.log(resdata.direction)
        //             // that.setData({
        //             //   car_position: res.data.car_position
        //             // })
        //       that.setData({
        //         // car_position: resdata.car_position,
        //         // location: resdata.direction
        //         car_position: res_data.car_position,
        //         location: res_data.direction
        //       })
        //     }
        // })



    }
})