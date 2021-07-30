/*
// 获取当前城市
const getCurrentCityName = function() {
  return new Promise((resolve, reject) => {
    let myCity = new BMap.LocalCity();
    myCity.get((result) => {
      let geoc = new BMap.Geocoder();
      geoc.getLocation(result.center, (rs) => {
        // rs 中携带着所有的定位信息，这里只获取了城市(city)和所在的区(district)
        let addComp = rs.addressComponents;
        let result = addComp.city + addComp.district;
        resolve(result);
      });
    }, {enableHighAccuracy: true});
  });
};
export default getCurrentCityName;
*/
/*
————————方法二————————*/
//百度地图获取城市名称的方法
let getCurrentCityName = function () {
  return new Promise(function (resolve, reject) {
    let myCity = new BMap.LocalCity();
    console.log();
    myCity.get(function (result) {
      // console.log(result)
      resolve(result.name)
    })
  })
};
export default getCurrentCityName

