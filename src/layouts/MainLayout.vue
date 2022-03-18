<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-red-10 text-white" height-hint="90">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold" bg="black">
          <q-avatar square>
             <img src="logo.png">
          </q-avatar>
          DSI Dispatch Note Application
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      
      
      </q-toolbar>


    </q-header>

 <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered class="bg-blue-grey-2">
      <!-- drawer content -->
      <q-layout view="hHh LpR fFf">

      <!-- <q-input
        placeholder="Search DN Forms"
        class="q-ma-md"
        outlined
        rounded
        dense
        >
      
      <template v-slot:prepend>
          <q-icon name="event" />
        </template>
        </q-input> -->





  <div class="q-pa-l">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      hide-scrolling
    >
    
      <q-carousel-slide :name="4" img-src="s20.jpg" />
      <q-carousel-slide :name="1" img-src="s2.jpg" />
      <q-carousel-slide :name="2" img-src="s6.png" />
      <q-carousel-slide :name="3" img-src="s7png.png" />
      <q-carousel-slide :name="4" img-src="s4.jpg" />
       <q-carousel-slide :name="1" img-src="s6.png" />
 
    

    </q-carousel>
  </div>












        <q-list bordered padding>
      <q-item>
        <q-item-section>
          <q-item-label overline>DN form List</q-item-label>
          <q-item-label class="text-weight-bold">Use the DN Form Number</q-item-label>
          <q-item-label class="text-weight-bold" caption>You can Search all the DN forms here. Use the DN form number to search</q-item-label>
        </q-item-section>

        <q-item-section side top>
         
        </q-item-section>
      </q-item>
      </q-list>
     





  <div class="q-pa-l">
    <q-carousel
      animated
      v-model="slide2"
      navigation
      infinite
      :autoplay="autoplay2"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      hide-scrolling
    >
    
  
      <q-carousel-slide :name="3" img-src="s8.jpg" />
      <q-carousel-slide :name="4" img-src="s9.jpg" />
       <q-carousel-slide :name="1" img-src="s10.png" />
      <q-carousel-slide :name="2" img-src="s12.png" />


    </q-carousel>
  </div>




      
<q-list bordered padding>
      <q-item>
        <q-item-section>
          <q-item-label overline>DN form Number =0001</q-item-label>
          <q-item-label class="text-weight-bold">2021/09/19</q-item-label>
          <q-item-label class="text-weight-bold" caption>9.30 AM</q-item-label>
          <q-item-label class="text-weight-bold" caption>Details =Monitors-12,cpu-3,mouse-8</q-item-label>
          <q-item-label class="text-weight-bold" caption>Location =Galle,Hapugala</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>30 min ago</q-item-label>
        </q-item-section>
      </q-item>
      </q-list>

      
<q-list bordered padding>
      <q-item>
        <q-item-section>
          <q-item-label overline>DN form Number =0002</q-item-label>
          <q-item-label class="text-weight-bold">2021/06/23</q-item-label>
          <q-item-label class="text-weight-bold" caption>10.00 AM</q-item-label>
          <q-item-label class="text-weight-bold" caption>Details =Monitors-12,cpu-3,mouse-8</q-item-label>
        <q-item-label class="text-weight-bold" caption>Location =Colombo 7</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>30 min ago</q-item-label>
        </q-item-section>
      </q-item>
      </q-list>

      </q-layout>
    </q-drawer>

  
   
    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered class="bg-blue-grey-2 " >
      <!-- drawer content -->
  <!-- <q-input
        placeholder="Search DN Forms"
        class="q-ma-md"
        outlined
        rounded
        dense
        >
      
      <template v-slot:prepend>
          <q-icon name="event" />
        </template>
        </q-input> -->






  <div class="q-pa-l">
    <q-carousel
      animated
      v-model="slide2"
      navigation
      infinite
      :autoplay="autoplay2"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      hide-scrolling
    >
    
  
      <q-carousel-slide :name="3" img-src="s8.jpg" />
      <q-carousel-slide :name="4" img-src="s9.jpg" />
       <q-carousel-slide :name="1" img-src="s10.png" />
      <q-carousel-slide :name="2" img-src="s12.png" />


    </q-carousel>
  </div>














<q-list bordered padding>
      <q-item>
        <q-item-section>
          <q-item-label overline>DN form Number =0001</q-item-label>
          <q-item-label class="text-weight-bold">2021/06/22</q-item-label>
          <q-item-label class="text-weight-bold" caption>12.30 PM</q-item-label>
         <q-item-label class="text-weight-bold" caption>Location =Colombo</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>30 min ago</q-item-label>
        </q-item-section>
      </q-item>
      </q-list>


<q-list bordered padding>
      <q-item>
        <q-item-section>
          <q-item-label overline>DN form Number =0001</q-item-label>
          <q-item-label class="text-weight-bold">2021/06/22</q-item-label>
          <q-item-label class="text-weight-bold" caption>12.30 PM</q-item-label>
         <q-item-label class="text-weight-bold" caption>Location =Colombo</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>30 min ago</q-item-label>
        </q-item-section>
      </q-item>
      </q-list>


<q-list bordered padding>
      <q-item>
        <q-item-section>
          <q-item-label overline>To be return DN List</q-item-label>
          <q-item-label class="text-weight-bold">Use the DN Form Number</q-item-label>
          <q-item-label class="text-weight-bold" caption>You can Search all the TO BE RETURN DN forms here. Use the DN form number to search</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>35 min ago</q-item-label>
        </q-item-section>
      </q-item>
      </q-list>


<q-list bordered padding>
      <q-item>
        <q-item-section>
          <q-item-label overline>DN form Number =0001</q-item-label>
          <q-item-label class="text-weight-bold">2021/06/22</q-item-label>
          <q-item-label class="text-weight-bold" caption>12.30 PM</q-item-label>
         <q-item-label class="text-weight-bold" caption>Location =Colombo</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>30 min ago</q-item-label>
        </q-item-section>
      </q-item>
      </q-list>


<q-list bordered padding>
      <q-item>
        <q-item-section>
          <q-item-label overline>DN form Number =0001</q-item-label>
          <q-item-label class="text-weight-bold">2021/06/24</q-item-label>
          <q-item-label class="text-weight-bold" caption>19.30 Am</q-item-label>
         <q-item-label class="text-weight-bold" caption>Location =Galle</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>30 min ago</q-item-label>
        </q-item-section>
      </q-item>
      </q-list>



    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>


    <q-footer elevated class="bg-red-10 text-white" height-hint="90">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
           
          </q-avatar>
       
       DN application
  
        
 



<q-btn-group align-right>
      <q-btn to="/pageABOUT" color="blue-grey-10" label="about us"  />
      <q-btn to="/pageHELP"   color="black" label="get help" icon="visibility" />
       <q-btn color="primary" label="Logout"   @click="logout"   />
    </q-btn-group>








        </q-toolbar-title>
    
    
    
      </q-toolbar>
    </q-footer>
    
    

 


  </q-layout>
</template>



  









<script>


import { openURL } from 'quasar'
import firebase from 'firebase/compat/app';


import { ref } from 'vue'

export default {
   name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
    slide: ref(1),
      autoplay: ref(true),
        slide2: ref(1),
      autoplay2: ref(true),

     leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  },
  methods: {

 



    logout() {
  firebase.auth().signOut()
  this.$router.push('/')
    .then(() => {
    this.$q.notify({message: 'Sign Out Success.'})
  })
  .catch(error =>  console.log('error',error))
}, 
  }
}

</script>