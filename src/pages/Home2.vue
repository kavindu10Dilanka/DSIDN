<template>
  <div>
    <q-space />

  <q-separator vertical inset />
    <div class="q-pa-l">
      <q-parallax :height="60" :speed="0.5">
        <template v-slot:media>
          <img src="https://cdn.quasar.dev/img/parallax1.jpg" />
        </template>

        <h4 class="text-white">Welcome {{ user }} {{ email }}</h4>
      </q-parallax>
    </div>

      <q-separator vertical inset />

     <div class="shadow-2 rounded-borders" >
     <q-separator />
      <q-toolbar class="bg-blue-grey-3 text-white">
        <div class=" box_4">
          <q-card class="shadow">
            <q-card-section class="theme_color q-pa-sm text-black">
              <q-item class="q-pb-none q-pt-xs">
                <q-item-section>
                  
                  <q-item-label
                    class="text-h4"
                    style="font-weight: 300; letter-spacing: 3px"
                  >
                    {{ randomNumber() + randomNumber2() }}
                  </q-item-label>
                  <q-item-label class="text-grey-8">
                    Number of forms to be Approved
                  </q-item-label>
                </q-item-section></q-item
              ></q-card-section
            ></q-card
          >
        </div>




        <div class="q-pa-md" >
          <q-btn-group spread>
            <q-btn
              clickable
              to="QrGene"
              color="blue-grey-10"
              label="QRCode Generator"
             
            />
            
            <q-btn
              to="qrCam"
              color="blue-grey-10"
              label="Read QRCode"
              icon="camera_alt"
            />

               <q-btn
              to="/LiveChat"
              color="green"
              icon="mail"
              label="Live Chat"
            />
          </q-btn-group>
        </div>

      </q-toolbar>
      

      <!-- dropdown start -->
<div class="q-pa-md">
    <div class="row q-gutter-sm">
    
       
      <q-btn-dropdown
        split
        
        class="glossy"
        color="primary"
        label="Approved By Supervisor"
      >
        <q-list>
         <q-btn
                to="/FreeOf"
                color="cyan-4"
                glossy
                text-color="black"
                push
                label="Free of Charge DN"
              
                @click="alert('Hello World')"
              ></q-btn>

                <q-separator vertical inset />

              <q-btn
                to="/Tobe"
                color="cyan-4"
                push
                label="To Be Returned DN"
                glossy
                text-color="black"
              
                @click="() => alert('The Second Button')"
              ></q-btn>
                <q-separator vertical inset />
              <q-btn
                to="/Rej"
                color="red-10"
                glossy
                text-color="white"
                push
                label="Rejected  Free of Charge DN"
                
                @click="showAlert('The Third Button')"
              ></q-btn>
                <q-separator vertical inset />
              <q-btn
                to="/Rejtobe"
                color="red-10"
                glossy
                text-color="white"
                push
                label="Rejected  Tobe Returned DN"
                
                @click="showAlert('The Fourth Button')"
              ></q-btn>
        </q-list>
      </q-btn-dropdown>

      <q-btn-dropdown
        split
        
        class="glossy"
         text-color="black"
        color="amber"
        label="Approved By Security"
      >
        <q-list>
         
            <q-btn
                to="/FreeOfsec"
                color="yellow-5"
                glossy
                text-color="black"
                push
                label="Free of Charge DN"
                
                @click="alert('Hello World')"
              ></q-btn>

                <q-separator vertical inset />
              <q-btn
                to="/Tobesec"
                color="yellow-5"
                push
                label="To Be Returned DN"
                glossy
                text-color="black"
                
                @click="() => alert('The Second Button')"
              ></q-btn>
                <q-separator vertical inset />
              <q-btn
                to="/Rejsec"
                color="red-10"
                glossy
                text-color="white"
                push
                label="Rejected  Free of Charge DN"
              
                @click="showAlert('The Third Button')"
              ></q-btn>
                <q-separator vertical inset />
              <q-btn
                to="/Rejtobesec"
                color="red-10"
                glossy
                text-color="white"
                ppush
                label="Rejected  Tobe Returned DN"
                
                @click="showAlert('The Fourth Button')"
              ></q-btn>

        </q-list>
      </q-btn-dropdown>
    </div>
  </div>




        <!-- //list -->

      <!-- <q-list bordered padding class="bg-amber-2"> -->
        <!-- <div id="q-app">
          <div class="q-pa-md q-gutter-y-md column items-start">
            <q-btn-group push>
                <text-subtitle1>Approved By Supervisor </text-subtitle1>
              <q-btn
                to="/FreeOf"
                color="white"
                glossy
                text-color="black"
                push
                label="Free of Charge DN"
              
                @click="alert('Hello World')"
              ></q-btn>
              <q-btn
                to="/Tobe"
                color="white"
                push
                label="To Be Returned DN"
                glossy
                text-color="black"
              
                @click="() => alert('The Second Button')"
              ></q-btn>
              <q-btn
                to="/Rej"
                color="red-10"
                glossy
                text-color="white"
                push
                label="Rejected  Free of Charge DN"
                
                @click="showAlert('The Third Button')"
              ></q-btn>
              <q-btn
                to="/Rejtobe"
                color="red-10"
                glossy
                text-color="white"
                push
                label="Rejected  Tobe Returned DN"
                
                @click="showAlert('The Fourth Button')"
              ></q-btn>
            </q-btn-group>
          </div>
        </div> -->


<!-- button lisgtt2 -->
 <!-- <div id="q-app">
          <div class="q-pa-md q-gutter-y-md column items-start">
            <q-btn-group push>
              <text-subtitle1>Approved By Security </text-subtitle1>
              <q-btn
                to="/FreeOfsec"
                color="white"
                glossy
                text-color="black"
                push
                label="Free of Charge DN"
                
                @click="alert('Hello World')"
              ></q-btn>
              <q-btn
                to="/Tobesec"
                color="white"
                push
                label="To Be Returned DN"
                glossy
                text-color="black"
                
                @click="() => alert('The Second Button')"
              ></q-btn>
              <q-btn
                to="/Rejsec"
                color="red-10"
                glossy
                text-color="white"
                push
                label="Rejected  Free of Charge DN"
              
                @click="showAlert('The Third Button')"
              ></q-btn>
              <q-btn
                to="/Rejtobesec"
                color="red-10"
                glossy
                text-color="white"
                ppush
                label="Rejected  Tobe Returned DN"
                
                @click="showAlert('The Fourth Button')"
              ></q-btn>
            </q-btn-group>
          </div>
        </div> -->
<!-- end -->

        


      <!-- list -->
      


        <q-item v-for="DN in DnForm" :key="DN.id">
          <div style="width: 1000px">
            <q-expansion-item
              class="shadow-1 overflow-hidden"
              style="border-radius: 30px"
              icon="explore"
              :label="DN.dnnumber"
              @show="startCounting"
              @hide="stopCounting"
              header-class="bg-primary text-white"
              expand-icon-class="text-black"
            >
              <q-item-label class="bg-positive text-h6 text-center"
                >DN has Apporoved</q-item-label
              >

              <q-card dark bordered class="bg-grey-9 my-card">
                <q-card-section>
                  <div class="text-h6">
                    comment by {{ DN.aceUser }} (Supervisor) -
                  </div>
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
                        >DN by(E-mail) - {{ DN.Homeemail }}
                      </q-item-label>
                      <q-item-label text-body1-class="qweet-content"
                        >DN by(Username) - {{ DN.Homeuser }}
                      </q-item-label>
                      <q-item-label text-body1-class="qweet-content"
                        >Approved by (E-mail) - {{ DN.aceEmail }}
                      </q-item-label>
                      <q-item-label text-body1-class="qweet-content"
                        >Approved by(UserName) - {{ DN.aceUser }}
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

                    <q-input
                      bottom-slots
                      v-model="SECommentFoc"
                      placeholder="What's going on?"
                      autogrow
                      counter
                      maxlength="280"
                    >
                      <template v-slot:before>
                        <q-avatar size="m"> </q-avatar>
                      </template>

                      <div class="q-pa-s">
                        <q-btn-group spread>
                          <q-btn
                            color="negative"
                            glossy
                            label="Push the DN"
                            @click="deleteDN(DN, SECommentFoc)"
                          />
                          <q-btn
                            color="positive"
                            label="Accept the DN"
                            glossy
                            text-color="black"
                            @click="toExecutive(DN,SECommentFoc)"
                          />
                        </q-btn-group>
                      </div>
                    </q-input>

                    <q-separator />
                  </q-item-section>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>
        </q-item>

        <!-- list end -->

        <!-- list -->
        <q-item v-for="DNTBR in DnFormTBR" :key="DNTBR.id">
          <div style="width: 1050px">
            <q-expansion-item
              class="shadow-1 overflow-hidden"
              style="border-radius: 30px"
              icon="explore"
              :label="DNTBR.dnnumber"
              @show="startCounting"
              @hide="stopCounting"
              header-class="bg-amber text-black"
              expand-icon-class="text-white"
            >
              <q-card dark bordered class="bg-grey-9 my-card">
                <q-card-section>
                  <div class="text-h6">
                    comment by {{ DNTBR.aceEmail }}(Supervisor)-
                  </div>
                  <div class="text-subtitle2">{{ DNTBR.CommentTBR }}</div>
                </q-card-section>
              </q-card>

              <q-card>
                <q-card-section>
                  <q-item-section>
                    <q-item-label class="bg-warning text-h6 text-center"
                      ><q-item-label text-body1-class="qweet-content"
                        >DN number - {{ DNTBR.dnnumber }}</q-item-label
                      ></q-item-label
                    >

                    <q-parallax :height="150" :speed="0.5" src="white.jpg">
                      <q-item-label class="text-h5"
                        ><strong>To be return</strong></q-item-label
                      >
                      <q-item-label class="qweet-content"
                        >DN number = {{ DNTBR.dnnumber }}</q-item-label
                      >
                      <q-item-label text-body1-class="qweet-content"
                        >user Email - {{ DNTBR.Homeemail }}
                      </q-item-label>
                      <q-item-label text-body1-class="qweet-content"
                        >user name - {{ DNTBR.Homeuser }}
                      </q-item-label>
                      <!-- <q-item-label class='qweet-content' >Time        = {{DNTBR.time}}</q-item-label> -->
                      <q-item-label class="qweet-content"
                        >To be return Date = {{ DNTBR.date }}</q-item-label
                      >
                      <q-item-label text-body1-class="qweet-content"
                        >Approved by (E-mail) - {{ DNTBR.aceEmail }}
                      </q-item-label>
                      <q-item-label text-body1-class="qweet-content"
                        >Approved by(UserName) - {{ DNTBR.aceUser }}
                      </q-item-label>
                      <q-item-label class="qweet-content"
                        >Location = {{ DNTBR.Location }}</q-item-label
                      >
                      <q-item-label class="qweet-content"
                        >PhoneNumber = {{ DNTBR.phonenum }}
                      </q-item-label>
                    </q-parallax>

                    <div class="q-pa-md">
                      <q-table
                        card-class="bg-warning text-black"
                        title="Items"
                        :rows="DNTBR.rows"
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

                    <q-input
                      bottom-slots
                      v-model="SECommentTbr"
                      placeholder="What's going on?"
                      autogrow
                      counter
                      maxlength="280"
                    >
                      <template v-slot:before>
                        <q-avatar size="m">
                          <img src="08.jpg" />
                        </q-avatar>
                      </template>

                      <div class="q-pa-s">
                        <q-btn-group spread>
                          <q-btn
                            color="negative"
                            label="Push  DN"
                            @click="TBR2rej2(DNTBR, SECommentTbr)"
                          />
                          <q-btn
                            color="positive"
                            label="Accept the DN"
                            glossy
                            text-color="black"
                            @click="toExecutiveTBR(DNTBR)"
                          />
                        </q-btn-group>
                      </div>
                    </q-input>

                    <q-separator />
                  </q-item-section>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>
        </q-item>
      <!-- </q-list> -->
      <!-- list end -->

      <q-separator />
      <div class="text-bold" align="center"></div>

      <q-card-actions align="right">
        <div align="bottom">
          <!-- <q-btn
        class="flex flex-center q-px-lg q-py-sm q-mb-md"
        size="md"
        label="Logout"
        @click="logout"
        color="primary"
      /> -->
        </div>

        <q-page-scroller
          position="bottom-left"
          :scroll-offset="150"
          :offset="[18, 18]"
        >
          <q-btn fab icon="keyboard_arrow_up" color="primary" />
        </q-page-scroller>

        <q-page-scroller
          reverse
          position="top-right"
          :scroll-offset="20"
          :offset="[0, 18]"
        >
          <q-btn fab icon="keyboard_arrow_down" color="primary" />
        </q-page-scroller>
      </q-card-actions>
    </div>
  </div>
</template>

<script>
import { QrcodeStream } from "vue";

import { ref } from "vue";

import db from "src/boot/firebase";

import { uid } from "quasar";
import firebase from "firebase/compat/app";

export default {
  name: "PageIndex",
  components: { QrcodeStream },
  setup() {
    const miniState = ref(true);

    return {
      drawer: ref(false),
      miniState,
      isValid: undefined,
      camera: "auto",
      result: null,
      showCamera: false,

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
      REJfocsec: [],

      index: "",
      index2: "",
      indexAll: "",
    };
  },

  computed: {
    textInfo() {
      return this.showCamera
        ? "position the qrcode on the camera"
        : "Press the button and scan a qrcode.";
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
    async onDecode(content) {
      this.result = content;
      this.turnCameraOff();
    },

    turnCameraOn() {
      this.camera = "auto";
      this.showCamera = true;
    },

    turnCameraOff() {
      this.camera = "off";
      this.showCamera = false;
    },
    randomNumber() {
      db.collection("approvedByPBSfoc")
        .get()
        .then((querySnapshot) => {
          this.index = querySnapshot.size;

          console.log(this.index);
        });
      return +this.index;
    },

    randomNumber2() {
      db.collection("approvedByPBtbr")
        .get()
        .then((querySnapshot) => {
          this.index2 = querySnapshot.size;

          console.log(this.index2);
        });
      return +this.index2;
    },

    randomNumberAll() {
      this.indexAll = this.index + this.index2;
      console.log("ererrerere" + this.indexAll);
      return this.indexAll;
    },

    toExecutive(DN,SECommentFoc) {
      console.log(SECommentFoc);

       DN.SECommentFOC = SECommentFoc;
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
       DNTBR.SECommentTBR = SECommentTbr;
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

    deleteDN(DN, SECommentFoc) {
      DN.SECommentFoc = SECommentFoc;

      db.collection("RejectedBySECFOC")
        .add(DN)
        .then((docRef) => {
          console.log("Document written with ID:RejectedFOC ", docRef.id);

          db.collection("approvedByPBSfoc")
            .doc(DN.id)
            .delete()
            .then(function () {
              console.log("Document successfully deleted!");
            });
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    },

    TBR2rej2(DNTBR, SECommentTbr) {
      console.log("dilshaaaaaaaaaaaaaaan");
      DNTBR.SECommentTBR = SECommentTbr;

      db.collection("RejectedBySECTBR")
        .add(DNTBR)
        .then((docRef) => {
          console.log("Document written with ID:RejectedFOC ", docRef.id);

          db.collection("approvedByPBtbr")
            .doc(DNTBR.id)
            .delete()
            .then(function () {
              console.log("Document successfully deleted!");
            });
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
    db.collection("approvedByPBSfoc").onSnapshot((snapshot) => {
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

    db.collection("approvedByPBtbr").onSnapshot((snapshot) => {
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
