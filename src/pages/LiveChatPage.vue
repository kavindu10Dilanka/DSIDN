<template>
    <div>
    <q-space />
    
   <div class="q-pa-md">
    <q-parallax :height="110" :speed="0.5">
      <template v-slot:media>
        <img src="https://cdn.quasar.dev/img/parallax1.jpg">
      </template>

      <h3 class="text-white" >Welcome  {{ user }} {{ email }}</h3>
    </q-parallax>
  </div>



<div class="">
<q-card class="my-card">
      <q-card-section class="bg-green-4 text-white">

    
        
        <div class="text-h5" > Executive Manager</div>

        
      </q-card-section>

      <div class="q-py-lg q-px-md">

          
          <q-input bottom-slots 
          v-model="newQweetContent" 
          placeholder="What is happening?" 
          autogrow counter maxlength="280" >
       
        <template v-slot:before>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar5.jpg">
          </q-avatar>
        </template>

         <template v-slot:after>
          <q-btn 
          @click="addNewQweet"
          :disabled="!newQweetContent"
          
          unelevated rounded color="primary" label="save" />
        </template>
      </q-input>
        

          

        </div>
        <q-separator
        class="divider"
        color="grey-2"
        size="10px"
        />

        <q-list seperator>
      

      <q-item 
      v-for="qweet in qweets"
      :key="qweet.id"
      class="q-py-md">
        <q-item-section avatar top>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class='text-subtitle1' >Brunch this weekend?</q-item-label>
          <q-item-label class='qweet-content' >{{qweet.content}}</q-item-label>
          <div class="row">
            <q-btn 
            @click="deleteqweet(qweet)"
            flat round color="grey" 
            icon="card_giftcard"
             size='sm' />
          </div>
        </q-item-section>

        <q-item-section side top>
          {{qweet.date | relativeDate}}
        
        </q-item-section>
      </q-item>

    </q-list>



        

        
        
        <div class="text-subtitle2"></div>

      <q-separator />
      <div class ="text-bold"
      align=center
      >
      </div>
     
        
      <q-card-actions align="right">
     <div align="bottom">
      <q-btn
        class="flex flex-center q-px-lg q-py-sm q-mb-md"
        size="md"
        label="Logout"
        @click="logout"
        color="primary"
      />
    </div>
</q-card-actions>
    </q-card>
      </div>
      
      

 
    </div>
</template>


<script>
import { collection, query, where, onSnapshot } from "firebase/firestore";

import { formatDistance } from 'date-fns'
import db from 'src/boot/firebase'

import{uid} from 'quasar'
import firebase from 'firebase/compat/app';

export default {




name: "Home2",
  data () {
  return {
    user: '',
    email: '',
    newQweetContent:'',
    qweets:[
      
    ]
    
  }

},

  filters:{
    relativeDate(value){
      return formatDistance(value, new Date())
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
    addNewQweet(){
     let newQweet= {
       content: this.newQweetContent,
       date:Date.now()
     }
    // this.qweets.unshift(newQweet)
    db.collection("qweets").add(newQweet).then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
}).catch((error) => {
  console.error("Error adding document: ", error);
});
this.newQweetContent=''

    },
    deleteqweet(qweet){
      db.collection("qweets").doc(qweet.id).delete().then(function() {
        console.log("Document successfully deleted!");
      }).catch(function(error)  {
        console.error("Error removing document: ", error);
      })
    },
    logout() {
  firebase.auth().signOut()
  this.$router.push('/')
    .then(() => {
    this.$q.notify({message: 'Sign Out Success.'})
  })
  .catch(error =>  console.log('error',error))
}, 


},mounted(){
  db.collection("qweets").onSnapshot(snapshot=>  {
        snapshot.docChanges().forEach(change=> {
          let qweetChange=change.doc.data()
          qweetChange.id=change.doc.id
            if (change.type === "added") {
                console.log("New qweet: ", qweetChange);
                this.qweets.unshift(qweetChange)
            }
            if (change.type === "modified") {
                console.log("Modified qweet: ", qweetChange);
            }
            if (change.type === "removed") {
                console.log("Removed qweet: ", qweetChange);
                let index= this.qweets.findIndex(qweet =>qweet.id===qweetChange.id)
                this.qweets.splice(index, 1)
            }
        });
    });
}

}

</script>

<style lang="sass">
.divider

 .qweet-content
   white-space: pre-line


</style>