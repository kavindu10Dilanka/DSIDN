<template>
    
  <q-page
    class="window-auto"
    >

    <q-space />
      <q-separator />
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

    
        
        <div class="text-h6"> To Be return DN form</div>
        
        
        <div class="text-subtitle2"></div>
      </q-card-section>

      <q-separator />
      <div class ="text-bold"
      align=center
      >
      </div>
     
        

    </q-card>
      </div>
      
      
 






     <q-parallax :height="350" :speed="0.5 "
      src="003.jpg"
  
    >



    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
      font-colour="white"
        style="width: 600px" 
    >
    

    <div class="q-pa-s">
    <q-parallax :height="60" :speed="0.5">
      <template v-slot:media>
        <img src="white.jpg">
      </template>

      <h4 class="text-black" >DN NO-{{randomNumber()}} </h4>
    </q-parallax>
  </div>
 
      
 <q-input v-model="tobeREdate" 
 filled type="date" 
 hint="To Be Return Date"
 bg-color="white"
 dense />
 

 
  <q-select
      
        v-model="LocationTOBE"
          dense
        use-input 
        bg-color="white" 
        label="Destination-"
        :options="['Galle','Colombo','Karapitiya','Hapugala','Wakwella']"
      />

 <q-input
        filled
        v-model="PhoneNumberTOBE"
        label="Contact No."
        mask="(###) ### - ####"
        fill-mask
         dense
         bg-color="white"
          :rules="[ val => val && val.length > 0 || 'Contact No.']" 
      />

  
   <q-btn align="right" 
   class="btn-fixed-width" 
   color="green" 
  type="submit"
   label="Submit" 
   icon="flight_takeoff" 
    :disabled="!PhoneNumberTOBE"
   />


      <!-- <q-btn align="left" 
      class="btn-fixed-width" 
    color="primary"
      type="submit"
      label="Submit" 
       :disabled="!PhoneNumberTOBE"
      /> -->
  
<!-- <q-btn align="right"
     class="btn-fixed-width"
      color="green" 
      label="Logout"
     @click="logout"
      /> -->


    </q-form>

     
    
</q-parallax>

      <q-separator vertical inset /> 

 <q-parallax :height="350" :speed="0.5 "
      src="09.jpg"
  
    >

  <q-form
      @submit="Add"
      @reset="Reset"
      class="q-gutter-md"
      font-colour="white"
        style="width: 400px" 
      
      >
       <q-input
        filled
        bottom-slots 
        v-model="ItemName"
        fill-mask
        bg-color="white" 
        label="Item Name."
        hint=""
        
        
      />

       <q-input
        filled
        number
        bottom-slots 
        v-model="Quantitiy"
        fill-mask
         bg-color="white" 
        label="Quantitiy."
        hint=""
        :rules="[
        ]"
        
      />

   <q-select
        dence
        filled
        bottom-slots 
        v-model="Unit"
        fill-mask
         bg-color="white" 
        label="Unit."
        hint=""
         :options="['No unit','M','CM','L','ML','KG','G']"
        
      />



<q-btn align="right"
 class="btn-fixed-width"
  label="Add"
   type="submit" 
   size="md"   
   :disabled="!ItemName"
   color="primary"/>


    
  
</q-form>
</q-parallax>
 
   


<div class="q-pa-md"   >
   
    <q-table
      flat
      card-class="bg-light-blue-11 text-black"
      :rows-per-page-options="[0]"
      :virtual-scroll-sticky-size-start="48"
      title="Items"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      :loading="loading"
      
      
      
       
    >


    <template v-slot:body="props">
       
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
            <q-popup-edit v-model="props.row.name">
              <q-input v-model="props.row.name" dense autofocus counter />
            </q-popup-edit>
          </q-td>
         
          <q-td key="Quantity" :props="props">
            {{ props.row.Quantity }}
            <q-popup-edit v-model="props.row.calories" title="Edit Quantity" buttons>
              <q-input type="number" v-model="props.row.Quantity" dense autofocus />
            </q-popup-edit>
          </q-td>
          
           <q-td key="Unit" :props="props">
            {{ props.row.Unit }}
            <q-popup-edit v-model="props.row.Unit">
              <q-input v-model="props.row.Unit" dense autofocus counter />
            </q-popup-edit>
          </q-td>
          
          
<div align="center">
    <q-uploader
    icon="cloud_upload"
    v-model="Uploader"
      label="Auto Uploader"
      align-left
      auto-upload
        style="max-width: 300px"
      accept=".jpg, image/*"
    />
</div>




      
        </q-tr>
      </template>



      <template v-slot:top>
        <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" />
        <q-space />
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
         <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

    </q-table>
  </div>


  
   </q-page>
</template>




<script>
import db from 'src/boot/firebase'

import{uid} from 'quasar'
import firebase from 'firebase/compat/app';
import { ref } from 'vue'



const columns = [
  {
    name: 'name',
    required: true,
    label: 'Item name',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'Quantity', align: 'center', label: 'Quantity', field: 'Quantity', sortable: true },
   { name: 'Unit', align: 'center', label: 'Unit', field: 'Unit', sortable: true },
   { name: 'Uploader', align: 'center', label: 'Uploader', field: 'Uploader', sortable: true },
]

const rows = [
  
 
]
export default  {




name: "Home",
   data () {
     const loading = ref(false)
  return {
          time:'',
          date:'',
          LocationTOBE:'',
          DnNumberTOBE:'',
          PhoneNumberTOBE:'',
         dnDescriptionTOBE:'',
          user: '',
          email: '',
           filter: ref(''),
          columns,
           rows,
           Quantitiy:'',
           ItemName:'',
           Unit:'',

          rowsPerPage: 0,
           
           loading,
           Uploader:'',
           index:''
  
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
    logout() {
  firebase.auth().signOut()
  this.$router.push('/')
    .then(() => {
    this.$q.notify({message: 'Sign Out Success.'})
  })
  .catch(error =>  console.log('error',error))
}, 
 mounted(){
          db.collection('DNform').onSnapshot(function(snapshot){
          snapshot.docChanges().forEach(function(change){
          if(change.type ==='added'){
        console.log('New form  :',change.doc.data())
      }
    
    if(change.type ==='modified'){
    console.log('Modified  qweet :',change.doc.data())
  }
    if(change.type ==='removed'){
    console.log('Removed form   :',change.doc.data())
  }
})
 })
  },

    onSubmit(){
           let DnFormDaataTOBE= {
              time: this.time,
              date: this.date,
              Location: this.LocationTOBE,
              dnnumber: this.DnNumberTOBE,
              phonenum : this.PhoneNumberTOBE,
              Description: this.dnDescriptionTOBE,
              date:Date.now(),
              
              Homeuser:this.user,
              Homeemail:this.email,
             
             aceEmail:"",
              aceUser:"",
              CommentTBR:"",
              SECommentTBR:"",
              

               dnnumber: this.randomNumber(),
              
              rows,

           }
          // this.qweets.unshift(newQweet)
      db.collection("DNformDataTBR").add(DnFormDaataTOBE).then((docRef) => {
       console.log("Document written with ID: ", docRef.id);
  
  
        this.$q.notify({message: 'Sign In Success.'})
        this.$router.push('/PageAfterSubmitDN')
  
  
  }).catch((error) => {
    console.error("Error adding document: ", error);
      });
      this.time=''
      this.date=''
       this.LocationTOBE=''
        this.DnNumberTOBE=''
         this.PhoneNumberTOBE=''
          this.user=''
          this.email=''
        
         this.DnNumber=''
        rows,
      

       db.collection("AllDataTbr").add(DnFormDaataTOBE).then((docRef) => {
       console.log("Document written with ID: ", docRef.id);
  
  
        this.$q.notify({message: 'Sign In Success.'})
  
  }).catch((error) => {
    console.error("Error adding document: ", error);
      });
      this.time=''
      this.date=''
       this.LocationTOBE=''
        this.DnNumberTOBE=''
         this.PhoneNumberTOBE=''
          this.dnDescriptionTOBE=''
             this.user=''
          this.email=''
         this.DnNumber=''
           rows
  
           },
//Adding to the Array
Add(){
let ARR={
  name:this.ItemName,
  Quantity:this.Quantitiy,
  Unit:this.Unit,
Uploader:this.Uploader,

}
this.rows.unshift(ARR)
this.ItemName=""
this.Quantitiy=""
this.Unit=""
this.Uploader=""
},
onItemClick(){

},
    
    
    removeRow () {
        loading.value = true
        setTimeout(() => {
          const index = Math.floor(Math.random() * rows.value.length)
          rows.value = [ ...rows.value.slice(0, index), ...rows.value.slice(index + 1) ]
          loading.value = false
        }, 500)
      },


     randomNumber(){
    
  db.collection("AllDataTbr").get().then((querySnapshot)=>{      
   this.index=  querySnapshot.size + 1000 + 1
 
  console.log(this.index); 
       
})
    return "TBR-" + this.index  ;
   
   
    }
}
}

</script>
