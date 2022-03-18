<template>
    <div >
    <q-space />
    
   <div class="q-pa-l">
    <q-parallax :height="80" :speed="0.5">
      <template v-slot:media>
        <img src="https://cdn.quasar.dev/img/parallax1.jpg">
      </template>

      <h4 class="text-white" >Welcome  {{ user }} {{ email }}</h4>
    </q-parallax>
  </div>
  <q-separator />

<div class="">
<q-card class="my-card">
      <q-card-section class="bg-blue-grey-10 text-white">
 
 
 
 
        <div class="text-h5" > Admin Dashbord</div>
        

      
      </q-card-section >
   
<div class="q-pa-md">
 <q-btn-group spread >
      <q-btn to= "FreeOfChargeForms" color="grey-5" glossy text-color="black" push label="Free Of charge DN Forms" icon="verified_user" />
      <q-btn to="allForms" color="amber" glossy text-color="black" push label="All forms " />
      <q-btn to="TobeReturnd"  color="grey-5"  glossy text-color="black" push label="To be return DN Forms" />
    </q-btn-group>
</div>






     <q-separator />

 
      <q-separator />
      <div class ="text-bold"
      align=center
      >
      </div>
     

<q-page class="q-pt-xs">
    <div class="q-ma-md">
      <div class="row q-mb-md q-col-gutter-md">
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_1">
          <q-card class="shadow">
            <q-card-section class="theme_color q-pa-sm text-black">
              <q-item class="q-pb-none q-pt-xs">
                <q-item-section>
                 
                  <q-item-label class="text-h4" style="font-weight: 500;letter-spacing: 3px;">{{randomNumber()}}</q-item-label>
                  
                  <q-item-label class="text-grey-8">Free DN'S for today</q-item-label>
               
 </q-item-section>

<q-item-section side>
                  
                </q-item-section>
              </q-item>
              <q-item class="q-py-xs" style="min-height: unset">
                <q-item-section>
                  <div class="progress-base q-my-sm">
                    <div class="progress-bar-1" style="width:70%"></div>
                  </div>
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_2 ">
          <q-card class="shadow">
            <q-card-section class="theme_color q-pa-sm text-black">
              <q-item class="q-pb-none q-pt-xs">
                <q-item-section>
                  <q-item-label class="text-h4" style="font-weight: 500;letter-spacing: 3px;">000{{randomNumberAll()}}</q-item-label>
                  <q-item-label class="text-grey-8">Total DN'S for today</q-item-label>
                </q-item-section>

          

        <q-item-section side>
                 
                </q-item-section>
              </q-item>
              <q-item class="q-py-xs" style="min-height: unset">
                <q-item-section>
                  <div class="progress-base q-my-l">
                    <div class="progress-bar-2" style="width:40%"></div>
                  </div>
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_3 ">
          <q-card class="shadow">
            <q-card-section class="theme_color q-pa-sm text-black">
              <q-item class="q-pb-none q-pt-xs">
                <q-item-section>
                  <q-item-label class="text-h4" style="font-weight: 500;letter-spacing: 3px;">000{{randomNumberAll()}}</q-item-label>
                  <q-item-label class="text-grey-8">Total DN </q-item-label>
                </q-item-section>

                <q-item-section side>
                 
                </q-item-section>
              </q-item>
              <q-item class="q-py-xs" style="min-height: unset">
                <q-item-section>
                  <div class="progress-base q-my-sm">
                    <div class="progress-bar-3" style="width:80%"></div>
                  </div>
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_4 ">
          <q-card class="shadow">
            <q-card-section class="theme_color q-pa-sm text-black">
              <q-item class="q-pb-none q-pt-xs">
                <q-item-section>
                  <q-item-label class="text-h4" style="font-weight: 500;letter-spacing: 3px;">{{randomNumber1()}}</q-item-label>
                  <q-item-label class="text-grey-8">To be returned DN'S for today</q-item-label>
                </q-item-section>

    </q-item>
 </q-card-section>
          
          
   <q-item-section>
   </q-item-section>    
          
          
          
          </q-card>
        </div>
        </div>
        </div>
          <q-separator />


<div class="q-pa-md">
    <q-btn-group spread>
      <q-btn  to="/Rej" color="light-blue-7"  label="Rejected  Free of Charge DN" icon="update" glossy text-color="black" />
      <q-btn  to="/Rejtobe"  color="light-blue-9" label="Rejected  Tobe Returned DN" icon="update" glossy text-color="black"/>
    </q-btn-group>
  </div>

  <q-separator />


<q-page class="q-pt-xs">
    <div class="q-ma-md">
      <div class="row q-mb-md q-col-gutter-md">
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_1">
          <q-card class="shadow">
            <q-card-section class="theme_color q-pa-sm text-red">
              <q-item class="q-pb-none q-pt-xs">
                <q-item-section>
                 
                  <q-item-label class="text-h4" style="font-weight: 500;letter-spacing: 3px;">{{randomNumberREJ()}}</q-item-label>
                  
                  <q-item-label class="text-black">Rejected Free DN'S </q-item-label>
               
 </q-item-section>

<q-item-section side>
                  
                </q-item-section>
              </q-item>
              <q-item class="q-py-xs" style="min-height: unset">
                <q-item-section>
                  <div class="progress-base q-my-sm">
                    <div class="progress-bar-1" style="width:70%"></div>
                  </div>
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_2 ">
          <q-card class="shadow">
            <q-card-section class="theme_color q-pa-sm text-red">
              <q-item class="q-pb-none q-pt-xs">
                <q-item-section>
                  <q-item-label class="text-h4" style="font-weight: 500;letter-spacing: 3px;">000{{randomNumberAllREJ()}}</q-item-label>
                  <q-item-label class="text-black">Total Rejected DN'S </q-item-label>
                </q-item-section>

          

        <q-item-section side>
                 
                </q-item-section>
              </q-item>
              <q-item class="q-py-xs" style="min-height: unset">
                <q-item-section>
                  <div class="progress-base q-my-l">
                    <div class="progress-bar-2" style="width:40%"></div>
                  </div>
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_3 ">
          <q-card class="shadow">
            <q-card-section class="theme_color q-pa-sm text-red">
              <q-item class="q-pb-none q-pt-xs">
                <q-item-section>
                  <q-item-label class="text-h4" style="font-weight: 500;letter-spacing: 3px;">000{{randomNumberAllREJ()}}</q-item-label>
                  <q-item-label class="text-black">Total DN </q-item-label>
                </q-item-section>

                <q-item-section side>
                 
                </q-item-section>
              </q-item>
              <q-item class="q-py-xs" style="min-height: unset">
                <q-item-section>
                  <div class="progress-base q-my-sm">
                    <div class="progress-bar-3" style="width:80%"></div>
                  </div>
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 box_4 ">
          <q-card class="shadow">
            <q-card-section class="theme_color q-pa-sm text-red">
              <q-item class="q-pb-none q-pt-xs">
                <q-item-section>
                  <q-item-label class="text-h4" style="font-weight: 500;letter-spacing: 3px;">{{randomNumber1REJ()}}</q-item-label>
                  <q-item-label class="text-black">Rejected To be returned DN'S for today</q-item-label>
                </q-item-section>

    </q-item>
 </q-card-section>
          
          
   <q-item-section>
   </q-item-section>    
          
          
          
          </q-card>
        </div>
        </div>
        </div>

  <q-separator />



  <div class="q-pa-md">
    <q-btn to="register" color="green" class="full-width" type="submit" label="Register"   icon="flight_takeoff"     />
  </div>

       

   <div class="q-pa-md">
    <q-btn q-btn to="/LiveChat" color="secondary"  icon-right="mail"  class="full-width"  label="Live-Chat" />

  

   </div>
</q-page>


        </q-page>

</q-card>
</div>

  </div>

   
</template>


<script>


import { ref } from 'vue'

import db from 'src/boot/firebase'


import{uid} from 'quasar'
import firebase from 'firebase/compat/app';

export default {
 setup () {
    const miniState = ref(true)
    
    
    return {
      drawer: ref(false),
      miniState,
    
    drawerClick (e) {

          // if in "mini" state and user
        // click on drawer, we switch it to "normal" mode
        

    }
    
     }
    
    },


name: "Home1",
  data () {
  return {
    user: '',
    email: '',
    DnForm:[],
    DnFormTBR:[],
    qweets:[],
    
    index:'',
    index1:'',
    indexAll:'',

    indexREJ:'',
    index1REJ:'',
    indexAllREJ:'',


    RegisterUser:'',
    RegisterUserPW:'',
    isUser:'',
    
  }
},
created() {
  firebase.auth().onAuthStateChanged((auth) => {
    if (auth) {
      this.user = auth.displayName
      this.email = auth.email
    } else {
      console.log('user name is null')
    }
  })
},

  methods: {

    randomNumber(){
    
  db.collection("Home1FocData").get().then((querySnapshot)=>{      
   this.index=  querySnapshot.size 
 
  console.log(this.index); 
       
})
    return "FOC-" + this.index  ;
   
   
    },

 randomNumber1(){
    
  db.collection("Home1TbrData").get().then((querySnapshot)=>{      
   this.index1=  querySnapshot.size 
 
  console.log(this.index1); 
       
})
    return "TBR-" + this.index1  ;
   
   
    },
 randomNumberAll(){
  
  this.indexAll=this.index + this.index1
   return this.indexAll
   
    },

// REJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ

randomNumberREJ(){
    
  db.collection("RejectedFOC").get().then((querySnapshot)=>{      
   this.indexREJ=  querySnapshot.size 
 
  console.log(this.indexREJ); 
       
})
    return "FOC-" + this.indexREJ  ;
   
   
    },

 randomNumber1REJ(){
    
  db.collection("RegectedTBR").get().then((querySnapshot)=>{      
   this.index1REJ=  querySnapshot.size 
 
  console.log(this.index1REJ); 
       
})
    return "TBR-" + this.index1REJ  ;
   
   
    },
 randomNumberAllREJ(){
  
  this.indexAllREJ=this.indexREJ + this.index1REJ
   return this.indexAllREJ
   
    },
    

  onSubmit(){
              let RegisterData= {
              email: this.RegisterUser,
              isUser: this.isUser,
              password : this.RegisterUserPW,
            
      
          }
      
          // this.qweets.unshift(newQweet)
        db.collection("testUsers").add(RegisterData).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
       
        this.$q.notify({message: 'Registerd.'})
        
     
        }).catch((error) => {
        console.error("Error adding document: ", error);
         });
      
          this.RegisterUser=''
          this.isUser=''
          this.RegisterUserPW=''
        
        
  },
 createUser(RegisterUser, RegisterUserPW) {
        firebase.auth().createUserWithEmailAndPassword(RegisterUser, RegisterUserPW)
    .then(auth => {
      this.$q.notify({message: 'Sign In Success.'})
      // this.$router.push('/home')
        alert("you are not registerd yet")
        
       firebase.auth().currentUser.uid
       let user={
         email:RegisterUser,
         password:RegisterUserPW,
         
       }



       

     // this.qweets.unshift(newQweet)
        db.collection("users").add(user).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
       
  
        this.$q.notify({message: 'Sign In Success.'})
        
         
     
     
        }).catch((error) => {
        console.error("Error adding document: ", error);
         });
          email
          this.password
          
  
    })
    .catch(error => {console.log(error)
    })
},

}
}

</script>
<style lang="sass">
.divider

 .qweet-content
   white-space: pre-line


</style>