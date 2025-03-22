 $(window).load(function(){  
             $(".loading").fadeOut()
            })  
			
/****/
$(document).ready(function(){
	var whei=$(window).width()
	$("html").css({fontSize:whei/20})
	$(window).resize(function(){
		var whei=$(window).width()
	 $("html").css({fontSize:whei/20})
});
	});


 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {
    echarts_1()
    echarts_2()
    echarts_3()
    echarts_4()
    echarts_5()
    echarts_6()


function echarts_1() {
 var myChart = echarts.init(document.getElementById('echarts1'));

 option = {
  tooltip: {
 trigger: 'axis',
 axisPointer: {type: 'shadow'},
},"grid": {
  "top": "20%",
"right":"50",
"bottom":"20",
"left":"55",
},
legend: {
  data: ['居民消费水平', '农村居民消费水平', '城镇居民消费水平','字段4','字段5','字段6'],
  right: 'center', width:'100%',
  textStyle: {
      color: "#fff"
  },
  itemWidth: 12,
  itemHeight: 10,
},



 "xAxis": [
   {
     "type": "category",
     data: ['2016', '2017', '2018', '2019'],
     axisLine: { lineStyle: {color: "rgba(255,255,255,.1)"}},
     axisLabel:  { textStyle: {color: "rgba(255,255,255,.7)", fontSize: '14', },
         },
 
     },
],
 "yAxis": [
   {
     "type": "value",
     "name": "单位：元",
     axisTick: {show: false},
     splitLine: {
      show: false,
     
  },
     "axisLabel": {
       "show": true,
       fontSize:14,
       color: "rgba(255,255,255,.6)"
      
     },
     axisLine: {
      min:0,
      max:10,
       lineStyle: {color: 'rgba(255,255,255,.1)'}
      },//左线色
     
   },
   {
     "type": "value",
     "name": "增速",
     "show": true,
     "axisLabel": {
       "show": true,
       fontSize:14,
       formatter: "{value} %",
       color: "rgba(255,255,255,.6)"
     },
     axisTick: {show: false},
   axisLine: {lineStyle: {color: 'rgba(255,255,255,.1)'}},//右线色
    splitLine: {show:true,lineStyle: {color:'rgba(255,255,255,.1)'}},//x轴线
   },
 ],
 "series": [
  
   {
     "name": "居民消费水平",
     "type": "bar",
     "data": [27504,27439, 31013, 31718],
     "barWidth": "15%",
     "itemStyle": {
       "normal": {
        barBorderRadius: 15,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#8bd46e'
      }, {
          offset: 1,
          color: '#09bcb7'
      }]),
       }
     },
     "barGap": "0.2"
   },
   {
    "name": "农村居民消费水平",
    "type": "bar",
    "data":[15382,16046, 18434, 19530],
    "barWidth": "15%",
    "itemStyle": {
      "normal": {
       barBorderRadius: 15,
       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#248ff7'
    }, {
        offset: 1,
        color: '#6851f1'
    }]),
      }
    },
    "barGap": "0.2"
  },
  {
    "name": "城镇居民消费水平",
    "type": "bar",
    "data":[34900,34043, 37995, 38289],
    "barWidth": "15%",
    "itemStyle": {
      "normal": {
       barBorderRadius: 15,
       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
         offset: 0,
         color: '#fccb05'
     }, {
         offset: 1,
         color: '#f5804d'
     }]),
      }
    },
    "barGap": "0.2"
  },
   {
     "name": "居民消费增速",
     "type": "line",
        smooth: true,
     "yAxisIndex": 1,
     "data": [0,-0.236, 13.025, 2.273],
   lineStyle: {
        normal: {
          width: 2
        },
      },
     "itemStyle": {
       "normal": {
         "color": "#86d370",
    
       }
     },
   
   }
   ,
   {
     "name": "农村消费增速",
     "type": "line",
     "yAxisIndex": 1,
 
     "data": [0, 4.317, 14.882, 5.946],
   lineStyle: {
   normal: {
     width: 2
   },
 },
     "itemStyle": {
       "normal": {
         "color": "#3496f8",
    
       }
     },
     "smooth": true
   } ,
   {
     "name": "城镇消费增速",
     "type": "line",
     "yAxisIndex": 1,
 
     "data":[0,-2.456, 11.609, 0.774],
   lineStyle: {
   normal: {
     width: 2
   },
 },
     "itemStyle": {
       "normal": {
         "color": "#fbc30d",
    
       }
     },
     "smooth": true
   }
 ]
};

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

	
    }
function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts2'));

       option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'shadow'},
       // formatter:'{c}' ,
    },
    grid: {
        left: '0',
	  	top: '30',
        right: '10',
        bottom: '-20',
        containLabel: true
    },
    legend: {
        data: ['居民消费水平指数', '居民消费价格指数'],
        right: 'center',
        top:0,
        textStyle: {
            color: "#fff"
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
  rotate: -90,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
          fontSize:14,
         
                },
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(255,255,255,.1)'
			}

        },

   data: ['2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年', '2022年']

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,

       

    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
        min:95,
        max:115,
       // splitNumber: 6,
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
        formatter: "{value} %",
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:14,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)'
            }
        }
    }],
    series: [
		{
        name: '居民消费水平指数',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
				color: 'rgba(228, 228, 126, 1)',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(228, 228, 126, .2)'
                }, {
                    offset: 1,
                    color: 'rgba(228, 228, 126, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
        color: 'rgba(228, 228, 126, 1)',
				borderColor: 'rgba(228, 228, 126, .1)',
				borderWidth: 12
			}
		},
        data: [109.8, 109.1, 107.9, 108.4, 109.5, 108.2, 106.6, 107.4, 106.1, 97.5, 111.4, 100.2 ]

    }, {
        name: '居民消费价格指数',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: 'rgba(255, 128, 128, 1)',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 128, 128,.2)'
                }, {
                    offset:1,
                    color: 'rgba(255, 128, 128, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: 'rgba(255, 128, 128, 1)',
				borderColor: 'rgba(255, 128, 128, .1)',
				borderWidth: 12
			}
		},
        data: [105.4, 102.6, 102.6, 102, 101.4, 102, 101.6, 102.1, 102.9, 102.5, 100.9, 102]
    }, 
		 ]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts3'));

        option = {

          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['居民人均食品烟酒支出', '居民人均居住支出'],
            right: 'center',
            top:0,
            textStyle: {
                color: "#fff"
            },
            itemWidth: 12,
            itemHeight: 10,
            // itemGap: 35
        },
          grid: {
            left: '0',
            right: '20',
            bottom: '0',
            top:'15%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: ['2013年','2014年','2015年','2016年','2017年','2018年','2019年','2020年','2021年','2022年'],
            axisLine: {
              lineStyle: {
                color: 'white'
   
              }
            },
            axisLabel: {
              //rotate:-90,
              formatter:function(value){return value.split("").join("\n");},
         textStyle: {
              color: "rgba(255,255,255,.6)",
             fontSize:14,
                   }
        },
            axisLine: {
               lineStyle: {
                   color: 'rgba(255,255,255,0.3)'
               }
           },
          },
   
          yAxis: {
            type: 'value',
            "name": "单位：元", 
            splitNumber: 4,
            axisTick: {show: false},
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(0, 0, 0, 0.1)'
              }
            },
            axisLabel: {textStyle: {
              color: "rgba(255,255,255,.6)",
             fontSize:14,
                   }},
            axisLine: {show:false},
          },
     
          series: [{
            name: '居民人均食品烟酒支出',
            type: 'bar',
            stack: 'a',
            barWidth: '30',barGap: 0,
            itemStyle: {
               normal: {
                color: '#8bd46e', }
            },
            data: [4127, 4494, 4814, 5151, 5374, 5631, 6084, 6397, 7178, 7481]
          },
          {
            name: '居民人均居住支出',
            type: 'bar',
            stack: 'a',
            barWidth: '30',barGap: 0,
            itemStyle: {
               normal: {
                color: '#f5804d',
               barBorderRadius:0, }
            },
            data: [2999, 3201, 3419, 3746, 4107, 4647, 5055, 5215, 5641, 5882]
          },          
        ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_5() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echarts5'));

      option = {
        tooltip: {
       trigger: 'axis',
       axisPointer: {type: 'shadow'},
      },"grid": {
        "top": "15%",
      "right":"10%",
      "bottom":"20",
      "left":"10%",
      },
       legend: {
        data: ['恩格尔系数', '基尼系数'],
        right: 'center',
        top:0,
        textStyle: {
            color: "#fff"
        },
        itemWidth: 12,
        itemHeight: 10,
      },
       "xAxis": [
         {
           "type": "category",       
           data: ['2019', '2020', '2021', '2022'],
        axisLine: { lineStyle: {color: "rgba(255,255,255,.1)"}},
           axisLabel:  { textStyle: {color: "rgba(255,255,255,.7)", fontSize: '14', },
               },       
           },
     ],
       "yAxis": [
         {
           "type": "value",
           "name": "单位：%",
           splitLine: {show: false},
           axisTick: {show: false},
           min:26,
           "axisLabel": {
             "show": true,
             color: "rgba(255,255,255,.6)"            
           },
           axisLine: {lineStyle: {color: 'rgba(255,255,255,.1)'}},//左线色
           
         },
         {
           "type": "value",
           "name": "单位：1",
           "show": true,
           min:0.46,
           axisTick: {show: false},
           "axisLabel": {
             "show": true,
             formatter: "{value} ",
             color: "rgba(255,255,255,.6)"
           },
         axisLine: {lineStyle: {color: 'rgba(255,255,255,.1)'}},//右线色
          splitLine: {show:true,lineStyle: {color:'rgba(255,255,255,.1)'}},//x轴线
         },
       ],
       "series": [
        
         {
           "name": "恩格尔系数",
           "type": "bar",
           "data": [
            28.2 ,30.2 ,29.8 ,30.5 
           ],
           "barWidth": "20%",

           "itemStyle": {
             "normal": {
              barBorderRadius: 15,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#fccb05'
            }, {
                offset: 1,
                color: '#f5804d'
            }]),
             }
           },
           "barGap": "0"
         },
         {
           "name": "基尼系数",
           "type": "line",
           "yAxisIndex": 1,       
           "data": [0.465,0.468,0.466,0.467],
         lineStyle: {
         normal: {
           width: 2
         },
       },
           "itemStyle": {
             "normal": {
               "color": "#ff3300",
          
             }
           },
           "smooth": true
         }
       ]
   };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize",function(){
          myChart.resize();
      });
  }
    function echarts_4() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echarts4'));
      var myColor=['#eb2100','#eb3600','#d0570e','#d0a00e','#34da62','#00e9db','#00c0e9','#0096f3'];
      option = {
           
              grid: {
                  left: '2%',
                  top:'1%',
                  right: '5%',
                  bottom: '0%',
                  containLabel: true
              },
              xAxis: [{
                  show: false,
              }],
              yAxis: [{
                      axisTick:'none',
                      axisLine:'none',
                      offset:'7',
                      axisLabel: {
                              textStyle: {
                                  color: 'rgba(255,255,255,.6)',
                                  fontSize:'14',
                              }
                          },
                      data: ['2014年','2015年','2016年','2017年','2018年','2019年','2020年','2021年','2022年']

                  }, {
                      axisTick:'none',
                      axisLine:'none',
                      axisLabel: {
                              textStyle: {
                                color: 'rgba(255,255,255,.6)',
                                  fontSize:'14',
                              }
                          },
                      data: [46912, 49922, 53783,59592,65534,70078 ,71828,81370,85698]

                       },{
                      name:'单位：元',
                          nameGap:'50',
                          nameTextStyle:{
                            color: 'rgba(255,255,255,.6)',
                              fontSize:'16',
                          },
                      axisLine:{
                        lineStyle:{
                          color:'rgba(0,0,0,0)'
                        }
                      },
                      data: [],
              }],
              series: [{
                  name: '条',
                  type: 'bar',
                  yAxisIndex: 0,
                  data: [100,106,107,110,110,107,102,113,105],
                  label:{
                        normal:{
                          show:true,
                          position:'right',
                          formatter:function(param){
                            return param.value + '%';
                          },
                          textStyle:{
                            color: 'rgba(255,255,255,.8)',
                             fontSize:'12',
                          }
                        }
                  },
                  barWidth: 15,
                  itemStyle: {
                      normal: {
                          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                  offset: 0,
                                  color: '#03c893'
                              },
                              {
                                  offset: 1,
                                  color: '#0091ff'
                              }
                          ]),
                          barBorderRadius: 15,
                      }
                  },
                  z: 2
              }, {
                  name: '白框',
                  type: 'bar',
                  yAxisIndex: 1,
                  barGap: '-100%',
                  data: [99.5,99.5,99.5,99.5,99.5,99.5,99.5,99.5,99.5,99.5],
                  barWidth: 15,
                  itemStyle: {
                      normal: {
                        color:'rgba(0,0,0,.2)',
                          barBorderRadius:15,
                      }
                  },
                  z: 1
              }]
          };
   

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize",function(){
          myChart.resize();
      });
  }
  function echarts_6() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echarts6'));
   

  option = {
    title:{
      text:'1210207.2',
      subtext:'总体',
      x:'center',
      y:'40%',
      textStyle:{
          color:'#fff',
          fontSize:22,
          lineHeight:10,
      },
      subtextStyle: {
          color:'#90979c',
          fontSize:16,
          lineHeight:10,

      },
  },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 500,
        max: 600,
        inRange: {
            //colorLightness: [0, 1]
        }
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        center: ['50%', '50%'],
        color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5'], //'#FBFE27','rgb(11,228,96)','#FE5050'
        data: [{
          "value": 447910.2,
          "name": "居民消费"
      }, {
          "value": 439732.5,
          "name": "社会消费品零售额"
      }, {
          "value": 322564.5,
          "name": "其他"}
        ].sort(function(a, b) {
            return a.value - b.value
        }),
        roseType: 'radius',

        label: {
            normal: {
                formatter: ['{c|{c}}', '{b|{b}}'].join('\n'),
                rich: {
                    c: {
                        color: 'rgb(241,246,104)',
                        fontSize: 14,
                        fontWeight:'bold',
                        lineHeight: 5
                    },
                    b: {
                        color: 'rgb(98,137,169)',
                        fontSize: 14,
                        height: 44
                    },
                },
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: 'rgb(98,137,169)',
                },
                smooth: 0.2,
                length: 10,
                length2: 20,

            }
        }
    }]
};
 

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}
})



		
		
		


		



















