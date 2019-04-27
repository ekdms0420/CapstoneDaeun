const routes = [{
  path: '/', component: () => import('@/components/airconditioner'), name: 'airconditioner'
}, { path: '/management', component: () => import('@/components/management'), name: 'management'
}, { path: '/managepopup', component: () => import('@/components/managepopup'), name: 'managepopup'
}, { path: '/battery', component: () => import('@/components/battery'), name: 'battery'
}, { path: '/managepopupBattery', component: () => import('@/components/managepopupBattery'), name: 'managepopupBattery'
}, { path: '/managepopupOil', component: () => import('@/components/managepopupOil'), name: 'managepopupOil'
}, { path: '/alarmEngineOil', component: () => import('@/components/alarmEngineOil'), name: 'alarmEngineOil'
}, { path: '/alarmBattery', component: () => import('@/components/alarmBattery'), name: 'alarmBattery' }]

export default routes
