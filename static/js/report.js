var icon_wid = "30px";
$(document).ready(function () {

    var ctx1 = document.getElementById("myChart1");


    // for(var i = 2;)
    var dict_425 = {
        "up": {
            "ontimeperf": {"weekly": [7.5987, 9.1185, 9.1185, 8.5112], "monthly": 8.5867},
            "speed": {"weekly": [7.5987, 9.1185, 9.1185, 8.5112], "monthly": 15.9625}
        },
        "down": {
            "ontimeperf": {"weekly": [7.5987, 9.1185, 9.1185, 8.5112], "monthly": 17.8448},
            "speed": {"weekly": [7.5987, 9.1185, 9.1185, 8.5112], "monthly": 8.5867}
        }
    };
    var ontime_up = Math.ceil(dict_425.up.ontimeperf.monthly);
    var ontime_down = Math.ceil(dict_425.down.ontimeperf.monthly);
    $green_img = "/static/images/img_green.png";
    $red_img = "/static/images/img_red.png";
    // var ontime_up = int(dict_425.up.ontimeperf.monthly)+1
    //
    
    // var img2 = 'static/images/img_red.png';
    for (var i = 0; i <= ontime_up; i++) {
        var img1 = document.createElement('img');
        img1.src = $green_img;
        $(img1).addClass('on');
        img1.style.width = icon_wid;
        img1.style.height = icon_wid;
        var cont = $("#ontime_up").find(".graph");
        cont.append(img1)
    }
    for (var i = ontime_up + 1; i <= 100; i++) {
        var img2 = document.createElement('img');
        img2.src = $red_img;
        $(img2).addClass('off');
        img2.style.width = icon_wid;
        img2.style.height = icon_wid;
        var cont = $("#ontime_up").find(".graph");
        cont.append(img2)
    }
    for (var i = 0; i <= ontime_down; i++) {
        var img1 = document.createElement('img');
        img1.src = $green_img;

        $(img1).addClass('on');
        img1.style.width = icon_wid;
        img1.style.height = icon_wid;
        var cont = $("#ontime_down").find(".graph");
        cont.append(img1)
    }
    for (var i = ontime_down + 1; i <= 100; i++) {
        var img2 = document.createElement('img');
        img2.src = $red_img;
        $(img2).addClass('off');
        img2.style.width = icon_wid;
        img2.style.height = icon_wid;
        var cont = $("#ontime_down").find(".graph");
        cont.append(img2)
    }
    // let cont = document.getElementById("ontime");
    // cont.appendChild("<br>")
    // cont.innerHTML("<br><br>")
    // (function() {
    //     var rotator = document.getElementById('rotator'), //get the element
    //         dir = 'images/',                              //images folder
    //         delayInSeconds = 1,                           //delay in seconds
    //         num = 0,                                      //start number
    //         len = N;                                      //limit
    //     setInterval(function(){                           //interval changer
    //         rotator.src = dir + num+'.jpg';               //change picture
    //         num = (num === len) ? 0 : ++num;              //reset if last image reached
    //     }, delayInSeconds * 50);
    // }());
    // console.log(dict_425.up.ontimeperf["weekly"])
    speed_up = [31.3683349654,
        28.5725592599,
        19.9519976248,
        16.5064729506,
        14.9998373322,
        15.8939166393,
        13.7671768199,
        12.3196071972,
        12.7168199856,
        12.9703444527,
        13.6953622013,
        13.4557893626,
        11.7932636853,
        10.4629115408,
        12.3227462123,
        14.3471203814,
        15.3560967106,
        19.1777497497
    ]
    speed_down = [36.1375,
        26.2448097678,
        21.2387994403,
        19.4220021559,
        17.345045173,
        14.6606281238,
        13.1668636162,
        12.9308718886,
        13.3954450685,
        12.0185694086,
        11.62731262,
        12.4781214564,
        11.6486883068,
        11.5608810225,
        12.0042096728,
        13.670469205,
        17.5335680782,
        19.8128731466,

    ]
    //up
    var myChart = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ["05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22"
            ],
            datasets: [{
                label: 'Average speed(Km/hour)',
                data: speed_up,
                backgroundColor: 
                    'rgba(255, 99, 132, 0.2)',
            
            
                borderColor: 
                    'rgba(255,99,132,1)',
            
                
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Time'
                        }
                    }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Km/hour'
                    }
                }]
            }
            
        }
    });


    //down
    var ctx2 = document.getElementById("myChart2");
    var myChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ["05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22"
            ],
            datasets: [{
                label: 'Average Speed(Km/hour)',
                data: speed_down,
                backgroundColor: 
                    'rgba(54, 162, 235, 0.2)',
                    
                
                borderColor: 
                    'rgba(54, 162, 235, 1)',
                    
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Time'
                        }
                    }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Km/hour'
                    }
                }]
            }
        }
    });
    var cont = document.getElementById("myChart3");
    // var opt1 = document.createElement('moretext');
    var myChart = new Chart(cont, {
        type: 'horizontalBar',
        data: {
            labels: ["Indian cars",
            "New York buses",
            "Mumbai buses",
            "Bus Route 425",
            ],
            datasets: [{
                label: 'Average speed(Km/hour)',
                data: [
                    26,
                    14,
                    12,
                    Math.ceil(dict_425.up.speed.monthly)
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Km/hour'
                        }
                    }],
                yAxes: [{
                    
                    display: true,
                    scaleLabel: {
                        display: true,
                    }
                }]
            }
        }
    });


    // opt1.innerHTML =Math.ceil(dict_425.up.speed.monthly) + "<strong> KM/HR</strong><br>"
    // cont.appendChild(opt1);
    ctx = document.getElementById("myChart4");
    // opt1 = document.createElement('moretext');
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["Indian cars",
            "New York buses",
            "Mumbai buses",
            "Bus Route 425",
            ],
            datasets: [{
                label: 'Average speed(Km/hour)',
                data: [
                    26,
                    14,
                    12,
                    Math.ceil(dict_425.down.speed.monthly)
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    
                ],
                borderWidth: 1
            }]
        },
        // afterDatasetsDraw(myChart,easing),
        options: {
            responsive: true,
            scales: {
                xAxes: [{
                        ticks: {
                        beginAtZero: true
                    },
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Time'
                        }
                    }],
                yAxes: [{
                    
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Km/hour'
                    }
                }]
            }
        }
        // animation: {
        //             duration: 1,
        //             onComplete: function () {
        //                 var chartInstance = this.chart,
        //                     ctx = chartInstance.ctx;
        //                 ctx.textAlign = 'center';
        //                 ctx.fillStyle = "rgba(0, 0, 0, 1)";
        //                 ctx.textBaseline = 'bottom';

        //                 this.data.datasets.forEach(function (dataset, i) {
        //                     var meta = chartInstance.controller.getDatasetMeta(i);
        //                     meta.data.forEach(function (bar, index) {
        //                         var data = dataset.data[index];
        //                         ctx.fillText(data, bar._model.x, bar._model.y - 5);

        //                     });
        //                 });
        //             }
        //         }
    });

    var monthly_ridership_425={
    "up":{
        "morning":[11, 26, 28, 35, 35, 29, 32, 33, 25, 22, 0],"noon":[12, 31, 34, 36, 37, 35, 39, 42, 40, 35, 0],"eve":[11, 32, 36, 38, 42, 45, 53, 59, 58, 50, 0],"night":[10, 28, 30, 28, 29, 32, 39, 41, 41, 36, 0],"stops":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    "down":{
        "morning":[30, 47, 43, 44, 43, 30, 26, 28, 26, 20, 0],"noon":[16, 28, 32, 37, 37, 38, 44, 45, 45, 37, 0],"eve":[13, 22, 26, 32, 34, 41, 50, 43, 37, 28, 0],"night":[7, 14, 16, 20, 21, 21, 22, 21, 19, 13, 0],"stops":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    }
}
var bgcolor = [];
var bordcolor = [];
for(var i = 0; i < monthly_ridership_425.up.morning.length; i++)

{
    bgcolor[i] = 'rgba(255, 99, 132, 0.2)';
    bordcolor[i] = 'rgba(255,99,132,1)';
}
ctx = document.getElementById("myChart5");
    // opt1 = document.createElement('moretext');
    var myChart = Chart.Line(ctx, {
        fill: false,
        data: {
            labels: monthly_ridership_425.up.stops,
            datasets: [{
                fill: false,
                label: 'Number of morning riders',
                data: monthly_ridership_425.up.morning,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                fill: false,
                label: 'Number of noon riders',
                data: monthly_ridership_425.up.noon,
                backgroundColor: 'rgba(54, 192, 235, 0.2)',
                borderColor: 'rgba(54, 192, 235, 1)',
                borderWidth: 1
            },
            {
                fill: false,
                label: 'Number of evening riders',
                data: monthly_ridership_425.up.eve,
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            },
            {
                fill: false,
                label: 'Number of night riders',
                data: monthly_ridership_425.up.night,
                backgroundColor: 'rgba(128, 255, 0, 0.2)',
                borderColor: 'rgba(128, 255, 0, 1)',
                borderWidth: 1
            }
            ]
        },
        // afterDatasetsDraw(myChart,easing),
        options: {
            // responsive: true,
             scales: {
                xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Stops'
                        }
                    }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    display: true,
                    scaleLabel: {
                        display: true,
                        
                    }
                }]
            },
            responsive: true,
            hoverMode: 'index',
            stacked: false,
        }
    }


    );
ctx = document.getElementById("myChart6");
    // opt1 = document.createElement('moretext');
    var myChart = Chart.Line(ctx, {
        fill: false,
        data: {
            labels: monthly_ridership_425.down.stops,
            datasets: [{
                fill: false,
                label: 'Number of morning riders',
                data: monthly_ridership_425.down.morning,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                fill: false,
                label: 'Number of noon riders',
                data: monthly_ridership_425.down.noon,
                backgroundColor: 'rgba(54, 192, 235, 0.2)',
                borderColor: 'rgba(54, 192, 235, 1)',
                borderWidth: 1
            },
            {
                fill: false,
                label: 'Number of evening riders',
                data: monthly_ridership_425.down.eve,
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            },
            {
                fill: false,
                label: 'Number of night riders',
                data: monthly_ridership_425.down.night,
                backgroundColor: 'rgba(128, 255, 0, 0.2)',
                borderColor: 'rgba(128, 255, 0, 1)',
                borderWidth: 1
            }
            ]
        },
        // afterDatasetsDraw(myChart,easing),
        options: {
            // responsive: true,
           scales: {
                xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Stops'
                        }
                    }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    display: true,
                    scaleLabel: {
                        display: true,
                        
                    }
                }]
            },
            responsive: true,
            hoverMode: 'index',
            stacked: false,
        }
    }


    );
var daily_ridership_425={
    "up":{
        "fare":[14419, 14820, 17519, 18194, 12121, 16478, 12393, 17708, 16345, 15660, 15518, 14813, 17413, 14607, 20206, 11035, 13341, 15548, 12461, 17212, 12091, 18889, 20576, 17679, 15943, 16438, 12541, 4940],"riders":[1563, 1558, 1905, 2088, 1452, 1896, 1428, 1840, 1867, 1705, 1752, 1744, 1987, 1509, 1995, 1255, 1527, 1803, 1283, 1840, 1204, 1829, 2146, 1914, 1746, 1889, 1346, 551],"peak":[66, 71, 96, 94, 79, 92, 63, 121, 90, 104, 89, 72, 98, 87, 80, 89, 89, 75, 71, 82, 67, 85, 93, 94, 86, 91, 86, 52]
    },
    "down":{
        "fare":[13798, 15870, 17578, 16923, 15696, 15668, 14944, 15656, 15626, 14555, 18240, 15335, 18643, 15164, 21762, 12918, 15365, 18783, 13508, 21705, 14569, 17705, 18741, 17308, 17231, 17121, 12804, 6960],"riders":[1527, 1767, 2151, 2008, 1924, 1877, 1766, 1761, 1913, 1702, 2157, 1884, 2208, 1713, 2284, 1465, 1812, 2265, 1468, 2317, 1620, 1735, 2147, 1991, 2091, 1969, 1476, 781],"peak":[100, 70, 113, 99, 87, 105, 105, 89, 96, 104, 117, 108, 112, 88, 123, 90, 113, 103, 74, 84, 82, 85, 102, 101, 109, 88, 97, 96]
    }
};
var days=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]

cont = document.getElementById("myChart7");
    // var opt1 = document.createElement('moretext');
    var myChart = new Chart(cont, {
        type: 'line',
        data: {

            labels: days,
            datasets: [{
                fill:false,
                data: daily_ridership_425.up.fare,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                label: 'Total fare collected(in Rupees)',
            }]
        },
        options: {
            scales: {
                xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Day of month'
                        }
                    }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    display: true,
                    scaleLabel: {
                        display: true,
                        
                    }
                }]
            },
        }
    });
cont = document.getElementById("myChart8");
    // var opt1 = document.createElement('moretext');
    var myChart = new Chart(cont, {
        type: 'line',
        data: {

            labels: days,
            datasets: [{
                fill:false,
                data: daily_ridership_425.down.fare,
                backgroundColor: 'rgba(100, 255, 132, 0.2)',
                borderColor: 'rgba(100,255,132,1)',
                borderWidth: 1,
                label: 'Total fare collected(in Rupees)',
            }]
        },
        options: {
            scales: {
                xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Day of month'
                        }
                    }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    display: true,
                    scaleLabel: {
                        display: true,
                        
                    }
                }]
            },
        }
    });


cont = document.getElementById("myChart9");
    // var opt1 = document.createElement('moretext');
    var myChart = new Chart(cont, {
        type: 'line',
        data: {

            labels: days,
            datasets: [{
                fill:false,
                data: daily_ridership_425.up.riders,
                backgroundColor: 'rgba(80, 99, 255, 0.2)',
                borderColor: 'rgba(80,99,255,1)',
                borderWidth: 1,
                label: 'Total number of riders',
            }]
        },
        options: {
            scales: {
                xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Day of month'
                        }
                    }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    display: true,
                    scaleLabel: {
                        display: true,
                        
                    }
                }]
            },
        }
    });
cont = document.getElementById("myChart10");
    // var opt1 = document.createElement('moretext');
    var myChart = new Chart(cont, {
        type: 'line',
        data: {

            labels: days,
            datasets: [{
                fill:false,
                data: daily_ridership_425.down.riders,
                backgroundColor: 'rgba(90, 80, 132, 0.2)',
                borderColor: 'rgba(90,80,132,1)',
                borderWidth: 1,
                label: 'Total number of riders',
            }]
        },
        options: {
            scales: {
                xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Day of month'
                        }
                    }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    display: true,
                    scaleLabel: {
                        display: true,
                        
                    }
                }]
            },
        }
    });


    cont = document.getElementById("myChart11");
    // var opt1 = document.createElement('moretext');
    var myChart = new Chart(cont, {
        type: 'line',
        data: {

            labels: days,
            datasets: [{
                fill:false,
                data: daily_ridership_425.up.peak,
                backgroundColor: 'rgba(40, 255, 10, 0.2)',
                borderColor: 'rgba(40,255,10,1)',
                borderWidth: 1,
                label: 'Peak number of riders',
            }]
        },
        options: {
            scales: {
                xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Day of month'
                        }
                    }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    display: true,
                    scaleLabel: {
                        display: true,
                        
                    }
                }]
            },
        }
    });
cont = document.getElementById("myChart12");
    // var opt1 = document.createElement('moretext');
    var myChart = new Chart(cont, {
        type: 'line',
        data: {

            labels: days,
            datasets: [{
                fill:false,
                data: daily_ridership_425.down.peak,
                backgroundColor: 'rgba(90, 80, 132, 0.2)',
                borderColor: 'rgba(90,80,132,1)',
                borderWidth: 1,
                label: 'Peak number of riders',
            }]
        },
        options: {
            scales: {
                xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Day of month'
                        }
                    }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    display: true,
                    scaleLabel: {
                        display: true,
                        
                    }
                }]
            },
        }
    });

var bunching_425={
    "down":{
        "morning":[0.6965986394557823, 0.6945578231292516, 0.6855654761904761, 0.6576508808651667, 0.6934523809523808, 0.6541666666666667, 0.6617926716141002, 0.655718537414966, 0.658890960230246, 0.6510989010989011, 0.6607404500261643, 0.6740800865800864, 0.6577571733821734, 0.6517316017316016, 0.6506164965986395, 0.6178380443086324, 0.6160125588697017, 0.6155178155178155, 0.6149921507064364, 0.6200622294372294, 0.6215702947845806, 0.6181645735217164, 0.6193598068598068, 0.8133276445776446, 0.8054029304029303, 0.8058379120879121, 0.8015620583897894, 0.7925396345509128, 0.7876148600772661, 0.7886367600653313, 0.7852657889312022, 0.7728736306508862, 0.7767148526077098, 0.812831117295403, 0.8062712585034013, 0.7790081941867656, 0.7421161267537318, 0.7197956805099661, 0.7362151678853358, 0.7767116811759669],"noon":[1.0727137226501446, 1.0675378484727223, 1.062722396650968, 1.0964517625231909, 1.0846565141207998, 1.0742001345992942, 1.067701247165533, 1.0959125695732839, 1.0843818827371459, 1.0921124510410223, 1.0909266328909186, 1.094497495968084, 1.0898575135182278, 1.1132055444555446, 1.1261169386169385, 1.1202668363382648, 1.109976234083377, 1.1337823882466738, 1.1101054203732776, 1.1184315188779477, 1.105407900339623, 1.105776515151515, 1.1115253793825224, 1.1208314094868717, 1.1140922073957789, 1.1101964999286429, 1.1357787054215625, 1.100854353979354, 1.100635475635476, 1.1003459833816975, 1.1154598377812666, 1.1216898676720104, 1.1298634896849182, 1.1347985843521557, 1.1274357091321379, 1.1678815232386661, 1.1556915306915307, 1.1325572245215103, 1.1492035246499532, 1.1501595626595624],"eve":[1.05265689609177, 1.0661914765906362, 1.0932823129251699, 1.118939393939394, 1.11126393447822, 1.0886788806431664, 1.0840859537288108, 1.107056931164074, 1.108356722642437, 1.076761631225917, 1.0857155741084312, 1.0705786277214846, 1.1079700061842919, 1.1034155328798185, 1.1251417233560088, 1.1065386002886002, 1.084683570397856, 1.0916975881261595, 1.1200680272108843, 1.0799190888476604, 1.098202690166976, 1.0706928983714696, 1.0980313337456193, 1.1030934343434342, 1.1157892702535557, 1.0909722222222222, 1.1248289409003693, 1.1024907632050487, 1.1117320179820178, 1.1246718559218558, 1.1179541688470258, 1.1103032879818593, 1.145934224505653, 1.1242643269428982, 1.1085807050092764, 1.113960543424829, 1.174241135848279, 1.1198734796949081, 1.1228861416361415, 1.1052901463615747], "night":[0.9173469387755101, 0.9121598639455781, 0.9006377551020409, 0.9208049886621313, 0.8731009070294784, 0.8855583900226758, 0.9050595238095237, 0.9065901360544217, 0.9232851473922901, 0.8914890956382554, 0.8723252937538654, 0.9045918367346938, 0.9259087725999491, 0.9028619198262055, 0.8996598639455782, 0.9258781134831555, 0.9134418161203876, 0.9373015873015873, 0.9291975881261595, 0.9613404452690167, 0.9640782828282829, 0.978814935064935, 0.9790391156462585, 0.9258928571428571, 0.9, 0.9376984126984126, 0.9159722222222223, 0.9117346938775509, 0.9165064102564103, 0.9111678004535146, 0.9175479282622139, 0.9376430117501545, 0.9339710884353741, 0.880643166357452, 0.8837159863945577, 0.9460484951556379, 0.9524496336996336, 0.9584338280766852, 1.0338177695320554, 0.9189200680272108],"stops":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]

    },
    "up":{
        "morning":[0.664987641326927, 0.6556693306693306, 0.6357864357864359, 0.6286340293693236, 0.6256569453937874, 0.5985517771701981, 0.6341903428037882, 0.6268796992481204, 0.6155160628844839, 0.6214190221543162, 0.6173687423687424, 0.626316391941392, 0.6344137655062024, 0.5987186920222634, 0.7941763243759041, 0.7922773654916512, 0.7927012471655328, 0.785685941043084, 0.7737980769230769, 0.7908459595959595, 0.8161945510629721, 0.7831524276377217, 0.7817781075134016, 0.7980583900226756, 0.746894078144078, 0.7253401360544218, 0.7407574568288854, 0.7489207221350078, 0.7950091575091573, 0.796273964131107, 0.7377838431409859, 0.7934948979591836, 0.759608843537415, 0.7680099662242519, 0.7363511488511488, 0.709894867037724],"noon":[1.091260686890386, 1.1140956557448154, 1.0860664137449851, 1.1182388835487576, 1.1104422013560669, 1.105409322820037, 1.107644191126334, 1.112388434394737, 1.1034756851458531, 1.1100765306122449, 1.1089197013304157, 1.1110110710951047, 1.102271438878582, 1.1026360544217686, 1.1019605336307017, 1.118079539508111, 1.0806689342403628, 1.1222652843188556, 1.0949395842252982, 1.085189075630252, 1.098772457701029, 1.1279916512059367, 1.1247147693576263, 1.1020909645909645, 1.1071866625438054, 1.1097887231815802, 1.1010695945044684, 1.1152766030654686, 1.1169030869923726, 1.1262755102040818, 1.1078271460099192, 1.1153619198262057, 1.1354520975056688, 1.127763605442177, 1.087958965637537, 1.1296857538868816],"eve":[1.0899410113695827, 1.1288613172541744, 1.0928481240981243, 1.1283879810665527, 1.088011492475778, 1.1101525458668315, 1.1105751391465677, 1.1089525553811268, 1.0856674079888367, 1.099668882704597, 1.112953019203019, 1.1137201092558235, 1.122678313749742, 1.1405212842712842, 1.104465574108431, 1.1037440733869304, 1.1186308730951589, 1.0936095650381366, 1.1092223748473748, 1.096045918367347, 1.118257833436405, 1.1253074306645734, 1.1711786229643368, 1.1218781218781217, 1.12229476872334, 1.0817133263561836, 1.1136763038548751, 1.1395072189715045, 1.1418280132565843, 1.1319160997732427, 1.1517483508554935, 1.1261225877297305, 1.1652983920841062, 1.116089466089466, 1.1070436507936505, 1.1902661822304679],"night":[0.9164682539682539, 0.9198593073593074, 0.8918934240362811, 0.8790288084930943, 0.9079365079365079, 0.9415275200989487, 0.9092699958771385, 0.9009778911564624, 0.9072729849515563, 0.9163407029478458, 0.9039965986394557, 0.9037414965986394, 0.9020833333333333, 0.9095663265306122, 0.6878968253968253, 0.6827380952380953, 0.7128684807256237, 0.7759920634920634, 0.6998299319727891, 0.8856009070294785, 0.7075396825396825, 0.7317460317460317, 0.7567318594104309, 0.7817176870748298, 0.7932256235827664, 0.7595663265306122, 0.8124858276643991, 0.8417942176870747, 0.7988095238095239, 0.7981575963718821, 0.873299319727891, 0.9061366213151929, 0.8806972789115646, 0.859013605442177, 0.881547619047619, 0.8732993197278912],"stops":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
    }
}


 ctx = document.getElementById("myChart13");
    // opt1 = document.createElement('moretext');
    var myChart = Chart.Line(ctx, {
            fill: false,
            data: {
                labels: bunching_425.up.stops,
                datasets: [{
                    fill: false,
                    label: 'morning bunch-size',
                    data: bunching_425.up.morning,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                    {
                        fill: false,
                        label: 'noon bunch-size',
                        data: bunching_425.up.noon,
                        backgroundColor: 'rgba(54, 192, 235, 0.2)',
                        borderColor: 'rgba(54, 192, 235, 1)',
                        borderWidth: 1
                    },
                    {
                        fill: false,
                        label: 'evening bunch-size',
                        data: bunching_425.up.eve,
                        backgroundColor: 'rgba(255, 206, 86, 0.2)',
                        borderColor: 'rgba(255, 206, 86, 1)',
                        borderWidth: 1
                    },
                    {
                        fill: false,
                        label: 'night bunch-size',
                        data: bunching_425.up.night,
                        backgroundColor: 'rgba(128, 255, 0, 0.2)',
                        borderColor: 'rgba(128, 255, 0, 1)',
                        borderWidth: 1
                    }
                ]
            },
            // afterDatasetsDraw(myChart,easing),
            options: {
                // responsive: true,
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Stops'
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        display: true,
                        scaleLabel: {
                            display: true,

                        }
                    }]
                },
                responsive: true,
                hoverMode: 'index',
                stacked: false,
            }
        }
    );
    ctx = document.getElementById("myChart14");
    // opt1 = document.createElement('moretext');
    // var myChart = Chart.Line(ctx, {
    //         fill: false,
    //         data: {
    //             labels: bunching_425.down.stops,
    //             datasets: [{
    //                 fill: false,
    //                 label: 'morning bunch-size',
    //                 data: bunching_425.down.morning,
    //                 backgroundColor: 'rgba(255, 99, 132, 0.2)',
    //                 borderColor: 'rgba(255, 99, 132, 1)',
    //                 borderWidth: 1
    //             },
    //                 {
    //                     fill: false,
    //                     label: 'noon bunch-size',
    //                     data: bunching_425.down.noon,
    //                     backgroundColor: 'rgba(54, 192, 235, 0.2)',
    //                     borderColor: 'rgba(54, 192, 235, 1)',
    //                     borderWidth: 1
    //                 },
    //                 {
    //                     fill: false,
    //                     label: 'evening bunch-size',
    //                     data: bunching_425.down.eve,
    //                     backgroundColor: 'rgba(255, 206, 86, 0.2)',
    //                     borderColor: 'rgba(255, 206, 86, 1)',
    //                     borderWidth: 1
    //                 },
    //                 {
    //                     fill: false,
    //                     label: 'night bunch-size',
    //                     data: bunching_425.down.night,
    //                     backgroundColor: 'rgba(128, 255, 0, 0.2)',
    //                     borderColor: 'rgba(128, 255, 0, 1)',
    //                     borderWidth: 1
    //                 }
    //             ]
    //         },
    //         // afterDatasetsDraw(myChart,easing),
    //         options: {
    //             // responsive: true,
    //             scales: {
    //                 xAxes: [{
    //                     display: true,
    //                     scaleLabel: {
    //                         display: true,
    //                         labelString: 'Stops'
    //                     }
    //                 }],
    //                 yAxes: [{
    //                     ticks: {
    //                         beginAtZero: true
    //                     },
    //                     display: true,
    //                     scaleLabel: {
    //                         display: true,

    //                     }
    //                 }]
    //             },
    //             responsive: true,
    //             hoverMode: 'index',
    //             stacked: false,
    //         }
    //     }
    // );
var data = [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4,
    4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2,
    3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3,
    3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3,
    2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3,
    2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3,
    2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9, 2.5, 3.6,
    3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2,
    2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3, 3.1, 3.1, 3.1, 2.7,
    3.2, 3.3, 3, 2.5, 3, 3.4, 3];

 $('#myChart14').highcharts(
    {
                  
    title: {
        text: 'Bell curve'
    },

    xAxis: [{
        title: {
            text: 'Data'
        },
        alignTicks: false
    }, {
        title: {
            text: 'Bell curve'
        },
        alignTicks: false,
        opposite: true
    }],

    yAxis: [{
        title: { text: 'Data' }
    }, {
        title: { text: 'Bell curve' },
        opposite: true
    }],

    series: [{
        name: 'Bell curve',
        type: 'bellcurve',
        xAxis: 1,
        yAxis: 1,
        baseSeries: 1,
        zIndex: -1
    }, {
        name: 'Data',
        type: 'scatter',
        data: data,
        marker: {
            radius: 1.5
        }
    }]
});



    // opt1.innerHTML = Math.ceil(dict_425.down.speed.monthly) + "<strong> KM/HR</strong><br>"
    // cont.appendChild(opt1);

    // req.send();
});
