// thông tin firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCLHFRWZxdGt4TsP4S1dMY3suW6sWNkAa0",
    authDomain: "tieu-viet-thong-bao-cao.firebaseapp.com",
    databaseURL: "https://tieu-viet-thong-bao-cao-default-rtdb.firebaseio.com",
    projectId: "tieu-viet-thong-bao-cao",
    storageBucket: "tieu-viet-thong-bao-cao.appspot.com",
    messagingSenderId: "861859562419",
    appId: "1:861859562419:web:3a1da3bd2ace58be1f41c6",
    measurementId: "G-KSC869S007"
  };

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//buttons created
var btnon1 = document.getElementById("btnon1");
var btnoff1 = document.getElementById("btnoff1");
var btnon2 = document.getElementById("btnon2");
var btnoff2 = document.getElementById("btnoff2");
var btnon3 = document.getElementById("btnon3");
var btnoff3 = document.getElementById("btnoff3");
//CD1
database.ref("/lab1/CD1").on("value", function(snapshot)
  {var status = snapshot.val();
  if (status==1)
    document.getElementById("CD1").src = "/img/auto_off.png";
  else
    document.getElementById("CD1").src = "/img/auto_on.png";
  });
//CD2
database.ref("/lab1/CD2").on("value", function(snapshot)
  {var status = snapshot.val();
  if (status==1)
    document.getElementById("CD2").src = "/img/auto_off.png";
  else
    document.getElementById("CD2").src = "/img/auto_on.png";
  });
//light_1
btnon1.onclick = function()
{
  document.getElementById("light_1").src = "/img/light_bulb.png"
  database.ref("/lab1").update({
    "light_1" : 1
  });
}
btnoff1.onclick = function()
{
  document.getElementById("light_1").src = "/img/light_bulb_off.png"
  database.ref("/lab1").update({
    "light_1" : 0
  });
}

database.ref("/lab1/light_1").on("value", function(snapshot)
  {var status = snapshot.val();
  if (status==1)
    document.getElementById("light_1").src = "/img/light_bulb.png";
  else
    document.getElementById("light_1").src = "/img/light_bulb_off.png";
  });
//transfer
btnon3.onclick = function()
{
  document.getElementById("transfer").src = "/img/onweb.png"
  database.ref("/lab1").update({
    "transfer" : 0
  });
}
btnoff3.onclick = function()
{
  document.getElementById("transfer").src = "/img/offweb.png"
  database.ref("/lab1").update({
    "transfer" : 1
  });
}

database.ref("/lab1/transfer").on("value", function(snapshot)
  {var status = snapshot.val();
  if (status==0)
    document.getElementById("transfer").src = "/img/onweb.png";
  else
    document.getElementById("transfer").src = "/img/offweb.png";
  });

//light_2
btnon2.onclick = function()
{
  document.getElementById("light_2").src = "/img/light_bulb.png"
  database.ref("/lab1").update({
    "light_2" : 1
  });
}
btnoff2.onclick = function()
{
  document.getElementById("light_2").src = "/img/light_bulb_off.png"
  database.ref("/lab1").update({
    "light_2" : 0
  });
}

database.ref("/lab1/light_2").on("value", function(snapshot)
  {var status = snapshot.val();
  if (status==1)
    document.getElementById("light_2").src = "/img/light_bulb.png";
  else
    document.getElementById("light_2").src = "/img/light_bulb_off.png";
  });
//pump_1
database.ref("/lab1/pump_1").on("value", function(snapshot)
  {var status = snapshot.val();
  if (status==1)
    document.getElementById("pump_1").src = "/img/wateringplant_on.jpg";
  else
    document.getElementById("pump_1").src = "/img/wateringplant.png";
  });
//pump_2
database.ref("/lab1/pump_2").on("value", function(snapshot)
  {var status = snapshot.val();
  if (status==1)
    document.getElementById("pump_2").src = "/img/wateringplant_on.jpg";
  else
    document.getElementById("pump_2").src = "/img/wateringplant.png";
  });
//fan_1
database.ref("/lab1/fan_1").on("value", function(snapshot)
  {var status = snapshot.val();
  if (status==1)
    document.getElementById("fan_1").src = "/img/fan_on.png";
  else
    document.getElementById("fan_1").src = "/img/fan_off.png";
  });
//fan_2
database.ref("/lab1/fan_2").on("value", function(snapshot)
  {var status = snapshot.val();
  if (status==1)
    document.getElementById("fan_2").src = "/img/fan_on.png";
  else
    document.getElementById("fan_2").src = "/img/fan_off.png";
  });
//mist
database.ref("/lab1/mist").on("value", function(snapshot)
  {var status = snapshot.val();
  if (status==1)
    document.getElementById("mist").src = "/img/snow_on.png";
  else
    document.getElementById("mist").src = "/img/snow_off.png";
  });
//roof
database.ref("/lab1/roof").on("value", function(snapshot)
  {var status = snapshot.val();
  if (status==1)
    document.getElementById("roof").src = "/img/roof_on.png";
  else
    document.getElementById("roof").src = "/img/roof_off.png";
  });
//
    database.ref("/lab1/nhietdo1").on("value", function(snapshot)
    {var temp1 = snapshot.val();
    document.getElementById("nhietdo1").innerHTML = temp1;
    });

    database.ref("/lab1/doam1").on("value", function(snapshot)
    {var humidity1 = snapshot.val();
    document.getElementById("doam1").innerHTML = humidity1;
    });

    database.ref("/lab1/doamdat1").on("value", function(snapshot)
    {var soil1 = snapshot.val();
    document.getElementById("doamdat1").innerHTML = soil1;
    });

    database.ref("/lab1/anhsang").on("value", function(snapshot)
    {var lux = snapshot.val();
    document.getElementById("anhsang").innerHTML = lux;
    });
//
    database.ref("/lab1/nhietdo2").on("value", function(snapshot)
    {var temp2 = snapshot.val();
    document.getElementById("nhietdo2").innerHTML = temp2;
    });

    database.ref("/lab1/doam2").on("value", function(snapshot)
    {var humidity2 = snapshot.val();
    document.getElementById("doam2").innerHTML = humidity2;
    });

    database.ref("/lab1/doamdat2").on("value", function(snapshot)
    {var soil2 = snapshot.val();
    document.getElementById("doamdat2").innerHTML = soil2;
    });

/// do thi nhiet do 1
var database1 = firebase.database();
var dataPoints1 = []; // Khởi tạo mảng dataPoints
database1.ref("/lab1/nhietdo1").on("value", function(snapshot) {
  var temp1 = snapshot.val();
  document.getElementById("nhietdo1").innerHTML = temp1;
  var timestamp = new Date().getTime();
  dataPoints1.push({ x: timestamp, y: temp1 });
  temperatureChart1.data.labels.push(new Date().toLocaleTimeString());
  temperatureChart1.data.datasets[0].data.push({ x: new Date().toLocaleTimeString(), y: temp1 });
  temperatureChart1.update(); // Cập nhật biểu đồ
});

var ctx = document.getElementById("temperatureChart1").getContext("2d");

var temperatureChart1 = new Chart(ctx, {
  type: "line",
  data: {
    labels: [], // Khởi tạo mảng rỗng cho trục x
    datasets: [
      {
        label: "Nhiệt độ",
        data: [], // Khởi tạo mảng rỗng cho dữ liệu
        fill: false,
        borderColor: "#3333FF",
        tension: 0.1
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        type: "category",
        display: true,
        position: "bottom",
        title: {
          display: true,
          text: "Thời gian (giờ:phút:giây)"
        }
      },
      y: {
        type: "linear",
        display: true,
        position: "left",
        title: {
          display: true,
          text: "Nhiệt độ (°C)"
        }
      }
    }
  }
});
///do thi nhiet do 2
var database2 = firebase.database();
var dataPoints2 = []; // Khởi tạo mảng dataPoints
    
    database2.ref("/lab1/nhietdo2").on("value", function(snapshot) {
      var temp2 = snapshot.val();
      document.getElementById("nhietdo2").innerHTML = temp2;
      var timestamp = new Date().getTime();
      dataPoints2.push({ x: timestamp, y: temp2 });
      temperatureChart2.data.labels.push(new Date().toLocaleTimeString());
      temperatureChart2.data.datasets[0].data.push({ x: new Date().toLocaleTimeString(), y: temp2 });
      temperatureChart2.update(); // Cập nhật biểu đồ
    });
    
    var ctx = document.getElementById("temperatureChart2").getContext("2d");
    
    var temperatureChart2 = new Chart(ctx, {
      type: "line",
      data: {
        labels: [], // Khởi tạo mảng rỗng cho trục x
        datasets: [
          {
            label: "Nhiệt độ",
            data: [], // Khởi tạo mảng rỗng cho dữ liệu
            fill: false,
            borderColor: "#FF7F00",
            tension: 0.1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: "category",
            display: true,
            position: "bottom",
            title: {
              display: true,
              text: "Thời gian (giờ:phút:giây)"
            }
          },
          y: {
            type: "linear",
            display: true,
            position: "left",
            title: {
              display: true,
              text: "Nhiệt độ (°C)"
            }
          }
        }
      }
    });
///do thi do am 1
var database3 = firebase.database();
var dataPoints3 = []; // Khởi tạo mảng dataPoints
    
    database3.ref("/lab1/doam1").on("value", function(snapshot) {
      var humi1 = snapshot.val();
      document.getElementById("doam1").innerHTML = humi1;
      var timestamp = new Date().getTime();
      dataPoints3.push({ x: timestamp, y: humi1 });
      humiChart1.data.labels.push(new Date().toLocaleTimeString());
      humiChart1.data.datasets[0].data.push({ x: new Date().toLocaleTimeString(), y: humi1 });
      humiChart1.update(); // Cập nhật biểu đồ
    });
    
    var ctx = document.getElementById("humiChart1").getContext("2d");
    
    var humiChart1 = new Chart(ctx, {
      type: "line",
      data: {
        labels: [], // Khởi tạo mảng rỗng cho trục x
        datasets: [
          {
            label: "Độ Ẩm",
            data: [], // Khởi tạo mảng rỗng cho dữ liệu
            fill: false,
            borderColor: "#3333FF",
            tension: 0.1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: "category",
            display: true,
            position: "bottom",
            title: {
              display: true,
              text: "Thời gian (giờ:phút:giây)"
            }
          },
          y: {
            type: "linear",
            display: true,
            position: "left",
            title: {
              display: true,
              text: "Độ Ẩm (%)"
            }
          }
        }
      }
    });
///do thi do am 2
var database4 = firebase.database();
var dataPoints4 = []; // Khởi tạo mảng dataPoints
    
    database4.ref("/lab1/doam2").on("value", function(snapshot) {
      var humi2 = snapshot.val();
      document.getElementById("doam2").innerHTML = humi2;
      var timestamp = new Date().getTime();
      dataPoints4.push({ x: timestamp, y: humi2 });
      humiChart2.data.labels.push(new Date().toLocaleTimeString());
      humiChart2.data.datasets[0].data.push({ x: new Date().toLocaleTimeString(), y: humi2 });
      humiChart2.update(); // Cập nhật biểu đồ
    });
    
    var ctx = document.getElementById("humiChart2").getContext("2d");
    
    var humiChart2 = new Chart(ctx, {
      type: "line",
      data: {
        labels: [], // Khởi tạo mảng rỗng cho trục x
        datasets: [
          {
            label: "Độ Ẩm",
            data: [], // Khởi tạo mảng rỗng cho dữ liệu
            fill: false,
            borderColor: "#FF7F00",
            tension: 0.1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: "category",
            display: true,
            position: "bottom",
            title: {
              display: true,
              text: "Thời gian (giờ:phút:giây)"
            }
          },
          y: {
            type: "linear",
            display: true,
            position: "left",
            title: {
              display: true,
              text: "Độ Ẩm (%)"
            }
          }
        }
      }
    });
///do thi do am dat 1
var database5 = firebase.database();
var dataPoints5 = []; // Khởi tạo mảng dataPoints
    
    database5.ref("/lab1/doamdat1").on("value", function(snapshot) {
      var soil1 = snapshot.val();
      document.getElementById("doamdat1").innerHTML = soil1;
      var timestamp = new Date().getTime();
      dataPoints5.push({ x: timestamp, y: soil1 });
      soilChart1.data.labels.push(new Date().toLocaleTimeString());
      soilChart1.data.datasets[0].data.push({ x: new Date().toLocaleTimeString(), y: soil1 });
      soilChart1.update(); // Cập nhật biểu đồ
    });
    
    var ctx = document.getElementById("soilChart1").getContext("2d");
    
    var soilChart1 = new Chart(ctx, {
      type: "line",
      data: {
        labels: [], // Khởi tạo mảng rỗng cho trục x
        datasets: [
          {
            label: "Độ Ẩm Đất",
            data: [], // Khởi tạo mảng rỗng cho dữ liệu
            fill: false,
            borderColor: "#3333FF",
            tension: 0.1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: "category",
            display: true,
            position: "bottom",
            title: {
              display: true,
              text: "Thời gian (giờ:phút:giây)"
            }
          },
          y: {
            type: "linear",
            display: true,
            position: "left",
            title: {
              display: true,
              text: "Độ Ẩm Đất (%)"
            }
          }
        }
      }
    });
///do thi do am dat 2
var database6 = firebase.database();
var dataPoints6 = []; // Khởi tạo mảng dataPoints
    
    database6.ref("/lab1/doamdat2").on("value", function(snapshot) {
      var soil2 = snapshot.val();
      document.getElementById("doamdat2").innerHTML = soil2;
      var timestamp = new Date().getTime();
      dataPoints6.push({ x: timestamp, y: soil2 });
      soilChart2.data.labels.push(new Date().toLocaleTimeString());
      soilChart2.data.datasets[0].data.push({ x: new Date().toLocaleTimeString(), y: soil2 });
      soilChart2.update(); // Cập nhật biểu đồ
    });
    
    var ctx = document.getElementById("soilChart2").getContext("2d");
    
    var soilChart2 = new Chart(ctx, {
      type: "line",
      data: {
        labels: [], // Khởi tạo mảng rỗng cho trục x
        datasets: [
          {
            label: "Độ Ẩm Đất",
            data: [], // Khởi tạo mảng rỗng cho dữ liệu
            fill: false,
            borderColor: "#FF7F00",
            tension: 0.1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: "category",
            display: true,
            position: "bottom",
            title: {
              display: true,
              text: "Thời gian (giờ:phút:giây)"
            }
          },
          y: {
            type: "linear",
            display: true,
            position: "left",
            title: {
              display: true,
              text: "Độ Ẩm Đất (%)"
            }
          }
        }
      }
    });
///do thi anh sang
var database7 = firebase.database();
var dataPoints7 = []; // Khởi tạo mảng dataPoints
    
    database7.ref("/lab1/anhsang").on("value", function(snapshot) {
      var uv = snapshot.val();
      document.getElementById("anhsang").innerHTML = uv;
      var timestamp = new Date().getTime();
      dataPoints7.push({ x: timestamp, y: uv });
      uvChart.data.labels.push(new Date().toLocaleTimeString());
      uvChart.data.datasets[0].data.push({ x: new Date().toLocaleTimeString(), y: uv });
      uvChart.update(); // Cập nhật biểu đồ
    });
    
    var ctx = document.getElementById("uvChart").getContext("2d");
    
    var uvChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [], // Khởi tạo mảng rỗng cho trục x
        datasets: [
          {
            label: "Ánh Sáng",
            data: [], // Khởi tạo mảng rỗng cho dữ liệu
            fill: false,
            borderColor: "#3333FF",
            tension: 0.1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: "category",
            display: true,
            position: "bottom",
            title: {
              display: true,
              text: "Thời gian (giờ:phút:giây)"
            }
          },
          y: {
            type: "linear",
            display: true,
            position: "left",
            title: {
              display: true,
              text: "Ánh Sáng (%)"
            }
          }
        }
      }
    });
//buttons (navigators) to change room
function openPage(pageName, element, color) 
{
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    let ele = document.getElementById(pageName);
    ele.style.display = "block";
    ele.style.backgroundRepeat = 'no-repeat';
    ele.style.backgroundSize = '100% 100%';
    switch (ele.id) {
        case 'Bedroom':
            document.body.style.setProperty('background-color', 'white');
            //ele.style.backgroundImage = 'url("./img/rau.jpg")';
            break;
        case 'Livingroom':
            document.body.style.setProperty('background-color', 'white');
            //ele.style.backgroundImage = 'url("./img/rau.jpg")';
            break;
        case 'Kitchen':
            document.body.style.setProperty('background-color', 'white');
            //ele.style.backgroundImage = 'url("./img/rau.jpg")';
            break;
        case 'bieudo':
            document.body.style.setProperty('background-color', 'white');
            //ele.style.backgroundImage = 'url("./img/rau.jpg")';
            break;
    }
    element.style.backgroundColor = color;
}