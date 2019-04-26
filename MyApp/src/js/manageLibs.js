let storage = {
  saveEngineOilkm: function (km) {
    localStorage.setItem('engineOilkm', km)
  },
  loadEngineOilkm: function () {
    let engineOilkm = localStorage.getItem('engineOilkm')
    engineOilkm = engineOilkm || ''
    return engineOilkm
  },
  saveEngineOilM: function (m) {
    localStorage.setItem('engineOilM', m)
  },
  loadEngineOilM: function () {
    let engineOilM = localStorage.getItem('engineOilM')
    engineOilM = engineOilM || ''
    return engineOilM
  },
  saveBatterykm: function (km) {
    localStorage.setItem('batterykm', km)
  },
  loadBatterykm: function () {
    let batterykm = localStorage.getItem('batterykm')
    batterykm = batterykm || ''
    return batterykm
  },
  saveBatteryM: function (m) {
    localStorage.setItem('batteryM', m)
  },
  loadBatteryM: function () {
    let batteryM = localStorage.getItem('batteryM')
    batteryM = batteryM || ''
    return batteryM
  }
}

export { storage }
