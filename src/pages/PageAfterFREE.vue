<template>
  <div>
    <q-space />

    <div class="">
      <q-card class="my-card">
        <q-card-section class="bg-blue-grey-10 text-white">
          <div class="text-h5">Free of charge DN forms</div>
   
          <!-- <div class="row justify-end">
    <q-btn to="/LiveChat"
       color="secondary" 
       icon-right="mail" 
       label="Live-Chat" 
        />
 </div>
        <div class="text-subtitle2"></div> -->
        </q-card-section>

        <q-separator />
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

        <q-separator />
        <div class="text-bold" align="center"></div>

        <q-item v-for="DN in DnForm" :key="DN.id">
          <div style="width: 1000px">
            <q-expansion-item
              class="shadow-1 overflow-hidden"
              style="border-radius: 30px"
              icon="explore"
              :label="DN.dnnumber"
              @show="startCounting"
              @hide="stopCounting"
              header-class="bg-primary text-black"
              expand-icon-class="text-black"
            >
              <q-item-label class="bg-positive text-h6 text-center"
                >DN has Apporoved</q-item-label
              >
              <q-card dark bordered class="bg-grey-9 my-card">
              <q-card-section>
                <div class="text-h6">comment by Supervisor -</div>
                <div class="text-subtitle2">{{ DN.commentfoc }}</div>
              </q-card-section>
            </q-card>



              <q-card>
                <q-card-section>
                  <q-item-section>
                    <q-item-label class="bg-light-blue-6 text-h6 text-center"
                      ><q-item-label text-body1-class="qweet-content"
                        >DN number - {{ DN.dnnumber }}</q-item-label
                      ></q-item-label
                    >
                    <q-parallax :height="150" :speed="0.5" src="white.jpg">
                      <q-item-label class="text-h5"
                        ><strong>Free Of charge</strong></q-item-label
                      >
                      <q-item-label text-body1-class="qweet-content"
                        >DN number - {{ DN.dnnumber }}</q-item-label
                      >
                      <q-item-label text-body1-class="qweet-content"
                        >Approved by (E-mail) - {{ DN.aceEmail }}
                      </q-item-label>
                      <q-item-label text-body1-class="qweet-content"
                        >Approved by(UserName) - {{ DN.aceUser }}
                      </q-item-label>
                      <q-item-label text-body1-class="qweet-content"
                        >DN by(E-mail) - {{ DN.Homeemail }}
                      </q-item-label>
                      <q-item-label text-body1-class="qweet-content"
                        >DN by(Username) - {{ DN.Homeuser }}
                      </q-item-label>
                      <!-- <q-item-label text-body1-class='qweet-content' >Time            - {{DN.time}}</q-item-label> -->
                      <q-item-label text-body1-class="qweet-content"
                        >Date - {{ DN.date }}</q-item-label
                      >
                      <q-item-label text-body1-class="qweet-content"
                        >Location - {{ DN.Location }}</q-item-label
                      >
                      <q-item-label ttext-body1-class="qweet-content"
                        >Hotline - {{ DN.phonenum }}</q-item-label
                      >
                    </q-parallax>

                    <div class="q-pa-md">
                      <q-table
                        card-class="bg-cyan-4 text-black"
                        title="Items"
                        :rows="DN.rows"
                        :columns="columns"
                        row-key="name"
                        :filter="filter"
                      >
                        <template v-slot:top-right>
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

        
                    <q-separator />
                  </q-item-section>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>
        </q-item>

        <q-separator inset="item" />

        <div class="text-subtitle2"></div>

        <q-separator />
        <div class="text-bold" align="center"></div>

        <!-- <q-card-actions align="right">
     <div align="bottom">
      <q-btn
        class="flex flex-center q-px-lg q-py-sm q-mb-md"
        size="md"
        label="Logout"
        @click="logout"
        color="primary"
      /> -->
        <!-- </div> -->
      </q-card>
    </div>
    
  </div>
  
</template>

<script>
import { ref } from "vue";

import db from "src/boot/firebase";

import { uid } from "quasar";
import firebase from "firebase/compat/app";

export default {
  setup() {
    const miniState = ref(true);

    return {
      drawer: ref(false),
      miniState,

      drawerClick(e) {
        // if in "mini" state and user
        // click on drawer, we switch it to "normal" mode
      },
    };
  },

  name: "Home1",
  data() {
    return {
      user: "",
      email: "",
      DnForm: [],
      DnFormTBR: [],
      qweets: [],
    };
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
    toExecutive(DN) {
      db.collection("approvedByExFoc")
        .add(DN)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
      db.collection("approvedByPBSfoc")
        .doc(DN.id)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    },
    toExecutiveTBR(DNTBR) {
      db.collection("apporovedByExTbr")
        .add(DNTBR)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
      db.collection("approvedByPBtbr")
        .doc(DNTBR.id)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    },

    deleteDN(DN) {
      db.collection("approvedByPBSfoc")
        .doc(DN.id)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    },

    deleteDNTBR(DNTBR) {
      db.collection("approvedByPBtbr")
        .doc(DNTBR.id)
        .delete()
        .then(function () {
          console.log("Document successfully deleted RRRRRR!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
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
  },
  mounted() {
    db.collection("Home1FocData").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let qweetChange = change.doc.data();
        qweetChange.id = change.doc.id;
        if (change.type === "added") {
          console.log("New DN: ", qweetChange);
          this.DnForm.unshift(qweetChange);
        }
        if (change.type === "modified") {
          console.log("Modified DN: ", qweetChange);
        }
        if (change.type === "removed") {
          console.log("Removed DN: ", qweetChange);
          let index = this.DnForm.findIndex((DN) => DN.id === qweetChange.id);
          this.DnForm.splice(index, 1);
        }
      });
    });
    db.collection("DNformDataFOC").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let qweetChangeTBR = change.doc.data();
        qweetChangeTBR.id = change.doc.id;
        if (change.type === "added") {
          console.log("New DNTBR: ", qweetChangeTBR);
          this.DnFormTBR.unshift(qweetChangeTBR);
        }
        if (change.type === "modified") {
          console.log("Modified DN: ", qweetChangeTBR);
        }
        if (change.type === "removed") {
          console.log("Removed DN: ", qweetChangeTBR);
          let index = this.DnFormTBR.findIndex(
            (DNTBR) => DNTBR.id === qweetChangeTBR.id
          );
          this.DnFormTBR.splice(index, 1);
        }
      });
    });
  },
};
</script>
<style lang="sass">
.divider

 .qweet-content
   white-space: pre-line
</style>
