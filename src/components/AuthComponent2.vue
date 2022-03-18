<template>
  
  <div >
  
 <div class="q-pa-md">
    <q-parallax :height="150" :speed="0.5">
      <template v-slot:media>
        <img src="https://cdn.quasar.dev/img/parallax1.jpg">
      </template>

      <h3 class="text-white" >Register a User </h3>
    </q-parallax>
  </div>


      
    

      
    <q-form   @submit="submitForm">
      <q-input outlined class="q-mb-md" type="email" label="Email" v-model="formData.email" />
      <q-input outlined class="q-mb-md" type="password" label="Password" v-model="formData.password" />
      <div class="row">
        <q-space />
        <q-btn type="submit" color="primary" :label="tab" />
      </div>
    </q-form>
    <div class="text-center q-my-md">
      <q-btn flat label="Forgot Password?" color="green" class="text-capitalize rounded-borders"
        v-if="tab !== 'register'" @click="forgotPassword" />
    </div>
    <q-dialog v-model="resetPwdDialog">
      <ForgotPassword />
    </q-dialog>
  </div>
</template>

<script>
import db from 'src/boot/firebase'
import firebase from 'firebase/compat/app';



import ForgotPassword from "./ForgotPassword.vue";
import { id } from 'date-fns/locale';
export default {
   
  name: "AuthComponent2",
  props: ['tab'],
  components: { ForgotPassword },
  data (){
    
    
    return {
      uuid:'',
      DnForm:[],
      formData: {
        email: '',
        password: ''
      },
      resetPwdDialog: false
    }
  },
  methods: {
    submitForm () {
      if (this.tab === 'login') {
         this.signInExistingUser(this.formData.email, this.formData.password)
      } else {
        this.createUser(this.formData.email, this.formData.password)
      }
    },


    google () {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithPopup(provider)
  .then(result => {
    console.log('result', result)
    this.$q.notify({message: 'Sign In Success.'})
    this.$router.push('/home')
  })
  .catch(error => console.log('error',error))
},


    signInExistingUser (email, password, ) {
   firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      this.$q.notify({message: 'Sign In Success.'})
     // this.$router.push('/home')
     firebase.auth().onAuthStateChanged((user) =>{
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    
    
    // ...

      console.log("hello",uid,email);
       var docRef = db.collection("testUsers").doc(user.uid);

docRef.get().then((doc) => {
    if (doc.exists) {
      if(doc.data().isUser=="0"){
        this.$router.push('/home')

      } if(doc.data().isUser=="1"){
        this.$router.push('/home1')

      }if(doc.data().isUser=="2"){
        this.$router.push('/home2')

      }if(doc.data().isUser=="3"){
        this.$router.push('/home3')

      }
        //console.log("Document 2345678987654321234567 data:", doc.data('isUser'),);
        //alert("Signed in user!")
        
        
        
        
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        //this.$router.push('/home')
        alert("you are not registerd yet")
        console.log(uid)
    }
}).catch((error) => {
    console.log("Error getting document:", error);
    
});
  } else {
    // User is signed out.
    // ...
  }
});
    })
    .catch(error => { console.log(error)})


 
}, 




    createUser(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(auth => {
      this.$q.notify({message: 'Sign In Success.'})
      // this.$router.push('/home')
       
       firebase.auth().currentUser.uid
       let user={
         email:email,
         password:password,
         
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
    forgotPassword () {
      this.resetPwdDialog = true
    }
  }
}
</script>