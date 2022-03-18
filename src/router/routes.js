const routes = [
  {
      path: '/',
      component: () => import('layouts/MainLayout.vue'),
      children: [
          { path: '/', component: () => import('src/pages/Auth.vue') },
          { path: '/home', component: () => import('src/pages/Home.vue'), meta: {requiresAuth: true} },
      
          { path: '/PageASKADN', component: () => import ('src/pages/Auth.vue') },
          
          { path: '/page1', component: () => import ('src/pages/Auth1.vue') },
          { path: '/home1', component: () => import('src/pages/Home1.vue'), meta: {requiresAuth: true} },
        
          { path: '/page2', component: () => import ('pages/Auth2.vue') },
          { path: '/home2', component: () => import('src/pages/Home2.vue'), meta: {requiresAuth: true} },
        
        //   { path: '/page3', component: () => import ('pages/Auth3.vue') },
        //  { path: '/home3', component: () => import('src/pages/Home3.vue'), meta: {requiresAuth: true} },
      
        { path: '/Dashbord', component: () => import('src/pages/DASH.vue'), meta: {requiresAuth: true} },


         { path: '/page4', component: () => import ('pages/Auth4.vue') },
         { path: '/home4', component: () => import('src/pages/Home4.vue'), meta: {requiresAuth: true} },

         { path: '/home3', component: () => import('src/pages/Home3.vue'), meta: {requiresAuth: true} },

         { path: '/PageAfterSubmitDN', component: () => import ('src/pages/PageAfterSubmitDN.vue') },
          
         { path: '/TObErePage', component: () => import('src/pages/HomeToBE.vue'), meta: {requiresAuth: true} },

      
         { path: '/LiveChat', component: () => import('src/pages/LiveChatPage.vue'), meta: {requiresAuth: true} },



         { path: '/testform', component: () => import('src/layouts/DnPrintPageSecurity.vue'), meta: {requiresAuth: true} },

      
      
         { path: '/allForms', component: () => import ('src/pages/DashAllForms.vue') },
        
         { path: '/FreeOfChargeForms', component: () => import ('src/pages/DashFreeof.vue') },

         { path: '/TobeReturnd', component: () => import ('src/pages/DashToBe.vue') },

         { path: '/PageAfterSubmitBTN', component: () => import ('src/pages/PageAfterSubmitDN.vue') },
        
         { path: '/register', component: () => import ('src/pages/Auth1.vue') },
      
      
         { path: '/FreeOf', component: () => import ('src/pages/PageAfterFREE.vue') },
       
         
         { path: '/Tobe', component: () => import ('src/pages/PageAfterTOBE.vue') },
        
         { path: '/Rej', component: () => import ('src/pages/PageAfterRej.vue') },
         
         

         { path: '/Rejtobe', component: () => import ('src/pages/PageAfterRejTO.vue') },

         { path: '/QR', component: () => import ('src/pages/Index.vue') },

         { path: '/QRGene', component: () => import ('src/pages/QrGene.vue') },

        
         { path: '/qrCam', component: () => import ('src/pages/Index.vue') },

         

         { path: '/FreeOfsec', component: () => import ('src/pages/PageAfterFREEsec.vue') },

         
         { path: '/Tobesec', component: () => import ('src/pages/PageAfterTOBEsec.vue') },

         

         { path: '/Rejsec', component: () => import ('src/pages/PageAfterRejsec.vue') },

        ]
  
      
      },
  // Always leave this as the last one,
  //but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]
export default routes