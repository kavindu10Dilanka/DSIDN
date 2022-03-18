<template>
  <q-page class="window-auto">
    <q-space />
    <q-separator />
    <div class="q-pa-l">
      <q-parallax :height="80" :speed="0.5">
        <template v-slot:media>
          <img src="https://cdn.quasar.dev/img/parallax1.jpg" />
        </template>

        <h4 class="text-white">Welcome {{ user }} {{ email }}</h4>
      </q-parallax>
    </div>
    <q-separator />

    <q-card-section class="bg-blue-grey-10 text-black">
      <div class="q-pa-s">
        <q-btn-group spread>
          <q-btn
            to="PageAfterSubmitBTN"
            text-color="black"
            color="blue-6"
            label="Profile"
            icon="visibility"
          />
          <q-btn
            to="TObErePage"
            color="blue-6"
            text-color="black"
            label="To be Return DN"
            icon="timeline"
          />
        </q-btn-group>
      </div>
    </q-card-section>

    <q-separator />
    <div class="text-bold" align="center"></div>

    <q-parallax :height="280" :speed="0.5" src="003.jpg">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
        font-colour="white"
        style="width: 600px"
      >
        <div class="q-pa-s">
          <q-parallax :height="50" :speed="0.5">
            <template v-slot:media>
              <img src="white.jpg" />
            </template>

            <h4 class="text-black" filled>DN NO-{{ randomNumber() }}</h4>
          </q-parallax>
        </div>

        <q-select
          dense
          v-model="LocationTo"
          use-input
          bg-color="white"
          label="Destination-"
          filled
          :options="['Galle', 'Colombo', 'Karapitiya', 'Hapugala', 'Wakwella']"
        />

        <q-input
          filled
          v-model="PhoneNumber"
          label="Contact No."
          mask="(###) ### - ####"
          fill-mask
          dense
          bg-color="white"
          :rules="[(val) => (val && val.length > 0) || 'Contact No.']"
        />
        <!-- 
        <q-btn align="left" 
       class="btn-fixed-width" 
       color="green"
      type="submit"
      label="Submit" 
       :disabled="!PhoneNumber"
      /> -->

        <q-btn
          align="center"
          class="btn-fixed-width"
          color="green"
          type="submit"
           
          
          label="Submit"
          style="width: 580px"
         
          :disabled="!PhoneNumber"
        />
        

        <!-- <q-btn align="right"
     class="btn-fixed-width"
      color="green" 
      label="Logout"
     @click="logout"
      /> -->
      </q-form>
    </q-parallax>

    <q-separator />

    <q-parallax :height="350" :speed="0.5" src="09.jpg">
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
          bottom-slots
          v-model="Quantitiy"
          fill-mask
          bg-color="white"
          label="Quantitiy."
          hint=""
          :rules="[]"
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
          :options="['Numbers', 'M', 'CM', 'L', 'ML', 'KG', 'G']"
        />

        <q-btn
          align="center"
          class="btn-fixed-width"
          label="Add"
          type="submit"
          size="md"
          style="width: 380px"
          :disabled="!ItemName"
          color="primary"
        />
      </q-form>
    </q-parallax>

    <div class="q-pa-md">
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
              <q-popup-edit
                v-model="props.row.Quantity"
                title="Edit Quantity"
                buttons
              >
                <q-input v-model="props.row.Quantity" dense autofocus counter />
              </q-popup-edit>
            </q-td>

            <q-td key="Unit" :props="props">
              {{ props.row.Unit }}
              <q-popup-edit v-model="props.row.Unit">
                <q-input v-model="props.row.Unit" dense autofocus counter />
              </q-popup-edit>
            </q-td>

            <q-btn
              v-for="size in sizes"
              :key="`btn_size_sq_${size}`"
              color="primary"
              :size="size"
              :label="`Size ${size}`"
            />

            <div align="center">
              <!-- <q-uploader
    @click="uploadImage"
    icon="cloud_upload"
    v-model="Uploader"
      label="Auto Uploader"
      align-left
      auto-upload
        style="max-width: 300px"
      accept=".jpg, image/*"
    /> -->

              <input
                type="file"
                @change="uploadImage"
                uploadTask
                auto-upload
                multiple
              />
              <!-- <q-btn size="xs" color="red" @click="cancelUP"   label="Cancel Upload" /> -->
            </div>
          </q-tr>
        </template>

        <template v-slot:top>
          <q-btn
            class="q-ml-sm"
            color="primary"
            :disable="loading"
            label="Remove row"
            @click="removeRow"
          />

          <q-space />
          <q-input
            borderless
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
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
import { getStorage, ref } from "firebase/storage";

import db from "src/boot/firebase";

import { uid } from "quasar";
import firebase from "firebase/compat/app";

// import { ref } from 'vue'

const columns = [
  {
    name: "name",
    required: true,
    label: "Item name",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "Quantity",
    align: "center",
    label: "Quantity",
    field: "Quantity",
    sortable: true,
  },
  {
    name: "Unit",
    align: "center",
    label: "Unit",
    field: "Unit",
    sortable: true,
  },
  {
    name: "Uploader",
    align: "center",
    label: "Uploader",
    field: "Uploader",
    sortable: true,
  },
];

const rows = [];
export default {
  name: "Home",
  data() {
    const loading = ref(false);
    return {
      time: "",
      LocationTo: "",
      DnNumber: "",
      PhoneNumber: "",

      user: "",
      email: "",
      filter: ref(""),
      columns,
      rows,
      Quantitiy: "",
      ItemName: "",
      Unit: "",
      rowsPerPage: 0,

      loading,
      Uploader: "",
      index: "",
      file: "",

      products: [],

      product: {
        image: null,
      },
      imgUrl: undefined,
    };
  },
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date());
    },
  },

  created() {
    firebase.auth().onAuthStateChanged((auth) => {
      if (auth) {
        this.user = auth.displayName;
        this.email = auth.email;
      } else {
        console.log("user name is null");
      }
    });
  },

  methods: {
    uploadImage(e) {
      this.file = e.target.files[0];
      var storageRef = firebase.storage().ref("products/" + this.file.name);
      this.imgUrl = storageRef;
      // let uploadTask = storageRef.put(this.file);
      // console.log("upload task", uploadTask);
      // console.log(e.target.files[0]);

      // // firebase CORD  copy

      // uploadTask.on(
      //   "state changed",
      //   (snapshot) => {},
      //   (error) => {},
      //   () => {
      //     uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      //       this.product.image = downloadURL;

      //       console.log("file available at", downloadURL);
      //     });
      //   }
      // );
    },

    cancelUP() {
      // this.file.cancel();
      uploadTask.cancel();
    },

    logout() {
      firebase.auth().signOut();
      this.$router
        .push("/")
        .then(() => {
          this.$q.notify({ message: "Sign Out Success." });
        })
        .catch((error) => console.log("error", error));
    },

    mounted() {
      db.collection("DNform").onSnapshot(function (snapshot) {
        snapshot.docChanges().forEach(function (change) {
          if (change.type === "added") {
            console.log("New form  :", change.doc.data());
          }
          if (change.type === "modified") {
            console.log("Modified  qweet :", change.doc.data());
          }
          if (change.type === "removed") {
            console.log("Removed form   :", change.doc.data());
          }
        });
      });
    },
    mounted1() {
      db.collection("DNform").onSnapshot(function (snapshot) {
        snapshot.docChanges().forEach(function (change) {
          if (change.type === "added") {
            console.log("New form  :", change.doc.data());
          }
          if (change.type === "modified") {
            console.log("Modified  qweet :", change.doc.data());
          }
          if (change.type === "removed") {
            console.log("Removed form   :", change.doc.data());
          }
        });
      });
    },

    onSubmit() {
      console.log("sdfghjklfghjkl: ", this.product.image);
      console.log("imgUrl", this.imgUrl);
      let DnFormDaata = {
        time: this.time,
        Location: this.LocationTo,
        dnnumber: this.randomNumber(),
        phonenum: this.PhoneNumber,
        Homeuser: this.user,
        Homeemail: this.email,
        aceEmail: "",
        CommentFOC:"",
        SECommentFOC:"",
        aceUser: "",

        date: Date.now(),

        rows,
        // image:this.image,
      };

      //  file uploader
      // var  storageRef = firebase.storage().ref('products/'+this.file.name);
      // storageRef.put(this.file);

      // console.log(dnnumber);

      // this.qweets.unshift(newQweet)
      if (this.imgUrl) {
        let uploadTask = this.imgUrl?.put(this?.file);

        // firebase CORD  copy
        // image upload start
        uploadTask.on(
          "state changed",
          (snapshot) => {},
          (error) => {},
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.product.image = downloadURL;

              console.log("file available at", downloadURL);
            });
          }
        );
      }
      // image upload end
      db.collection("DNformDataFOC")
        .add(DnFormDaata)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);

          this.$q.notify({ message: "Sign In Success." });

          this.$router.push("/PageAfterSubmitDN");
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      this.time = "";
      this.LocationTo = "";
      this.DnNumber = "";
      this.PhoneNumber = "";
      this.user = "";
      this.email = "";

      // this.image=''
      rows,
        db
          .collection("AllDataFoc")
          .add(DnFormDaata)
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);

            this.$q.notify({ message: "Sign In Success." });
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      this.time = "";
      this.LocationTo = "";
      this.DnNumber = "";
      this.PhoneNumber = "";
      this.user = "";
      this.email = "";
      // this.image=''

      rows;
    },

    //Adding to the Array
    //text field tika ko thiyenne
    Add() {
      let ARR = {
        name: this.ItemName,
        Quantity: this.Quantitiy,
        // Uploader:this.Uploader,
        //image: this.product.image,
        Unit: this.Unit,
      };
      this.rows.unshift(ARR);
      this.ItemName = "";
      this.Quantitiy = "";
      // this.Uploader=""
      this.Unit = "";
      //this.product.image=""
    },

    removeRow() {
      loading.value = true;
      setTimeout(() => {
        const index = Math.floor(Math.random() * rows.value.length);
        rows.value = [
          ...rows.value.slice(0, index),
          ...rows.value.slice(index + 1),
        ];
        loading.value = false;
      }, 500);
    },

    randomNumber() {
      db.collection("AllDataFoc")
        .get()
        .then((querySnapshot) => {
          this.index = querySnapshot.size + 1000 + 1;

          console.log(this.index);
        });
      return "FOC-" + this.index;
    },
  },
};
</script>
<style scoped>
.marked-row {
  background-color: green;
}
.unmarked-row {
  background-color: blue;
}
</style>
