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

    <div class="shadow-2 rounded-borders">
      <q-separator />
      <q-toolbar class="bg-blue-grey-9 text-white">
        <div class="box_4">
          <q-card class="shadow">
            <q-card-section class="theme_color q-pa-sm text-black">
              <q-item class="q-pb-none q-pt-xs">
                <q-item-section>
                  <q-item-label
                    class="text-h4"
                    style="font-weight: 300; letter-spacing: 3px"
                    >{{ randomNumber() + randomNumber2() }}
                  </q-item-label>
                  <q-item-label class="text-grey-8">
                    Approved forms
                  </q-item-label>
                </q-item-section></q-item
              ></q-card-section
            ></q-card
          >
        </div>

        <div class="q-pa-md">
          <q-btn-group spread>
            <q-btn to="/LiveChat" color="green" icon="mail" label="Live Chat" />
          </q-btn-group>
        </div>

        <q-btn-dropdown
          split
          class="glossy"
          color="primary"
          label="Approved and Rejected Forms"
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

        <!-- <q-toolbar-title> </q-toolbar-title>
        <div class="q-mt-md row justify-center">
          <q-fab
            class="“q-btn-fab-mini”"
            v-model="fab2"
            label="Actions"
            label-position="bottom"
            
            color="primary"
            icon="keyboard_arrow_down"
            direction="down"
            :hide-label="hideLabels"
          >
            <q-fab-action
              to="/LiveChat"
              :hide-label="hideLabels"
              color="primary"
              @click="onClick"
              icon="mail"
              label="Live Chat"
            />
            <q-fab-action
              :hide-label="hideLabels"
              color="secondary"
              @click="onClick"
              icon="alarm"
              label="Alarm"
            />
            <q-fab-action
              :hide-label="hideLabels"
              color="orange"
              @click="onClick"
              icon="airplay"
              label="Airplay"
            />
            <q-fab-action
              :hide-label="hideLabels"
              color="accent"
              @click="onClick"
              icon="room"
              label="Map"
            />
          </q-fab>
        </div> -->
      </q-toolbar>

      <q-separator />

      <q-separator />

      <!-- 
   <q-list bordered padding class="bg-grey-4"> -->

      <!-- <div id="q-app">
        <div class="q-pa-md q-gutter-y-md column items-start">
          <q-btn-group push>
            <q-btn
              to="/FreeOf"
              color="green-7"
              glossy
              text-color="black"
              push
              label="Free of Charge DN"
              icon="timeline"
            ></q-btn>
            <q-btn
              to="/Tobe"
              color="green-7"
              push
              label="To Be Returned DN"
              glossy
              text-color="black"
              icon="visibility"
            ></q-btn>
            <q-btn
              to="/Rej"
              color="green-7"
              glossy
              text-color="black"
              push
              label="Rejected  Free of Charge DN"
              icon="update"
            ></q-btn>
            <q-btn
              to="/Rejtobe"
              color="green-7"
              glossy
              text-color="black"
              ppush
              label="Rejected  Tobe Returned DN"
              icon="mail"
            ></q-btn>
          </q-btn-group>
        </div>
      </div> -->

      <q-separator vertical inset />
      <q-item-label class="bg-blue-grey-8 text-h7 text-white text-center"
        >You can see the Form when Apporoved</q-item-label
      >
      <!-- </q-list> -->

      <q-item v-for="DN in DnForm" :key="DN.id">
        <div style="width: 1000px">
          <q-expansion-item
            class="shadow-1 overflow-hidden"
            style="border-radius: 30px"
            icon="explore"
            :label="DN.dnnumber"
            label2="fdsf"
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
                      >Approved by (E-mail) - {{ DN.aceEmail }}
                    </q-item-label>
                    <!-- <q-item-label text-body1-class="qweet-content"
                      >Approved by (comment) - {{ DN.commentfoc }}
                    </q-item-label> -->

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

                    <q-btn
                      color="blue-grey-10"
                      outline
                      label="Donwload"
                      @click="donwloadCanvas"
                    />
                    <div style="max-width: 150px">
                      <vue-qrious :value="DN.dnnumber" :size="150" />
                    </div>
                    <!-- <q-img
                      src="QRCode.png"
                      loading="lazy"
                      spinner-color="white"
                      height="140px"
                      style="max-width: 150px"
                    /> -->
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

                  <!-- <q-btn color="green"  icon-right="send" label="ok" /> -->

                  <q-separator />
                </q-item-section>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
      </q-item>

      <!-- sdfghjkjhgfdfhgjkghfdghjhf -->

      <q-item v-for="REJFOC in REJfoc" :key="REJFOC.id" class="q-py-md">
        <div style="width: 1050px">
          <q-expansion-item
            class="shadow-1 overflow-hidden"
            style="border-radius: 30px"
            icon="explore"
            :label="REJFOC.dnnumber"
            @show="startCounting"
            @hide="stopCounting"
            header-class="bg-red-9 text-black"
            expand-icon-class="text-white"
          >
            <q-item-section>
              <q-separator />

              <q-item-label class="bg-negative text-h5 text-center"
                >DN has Rejected</q-item-label
              >

              <q-card dark bordered class="bg-grey-9 my-card">
                <q-card-section>
                  <div class="text-h6">
                    comment by {{ REJFOC.aceUser }}(Supervisor)-
                  </div>
                  <div class="text-subtitle2">{{ REJFOC.CommentFOC }}</div>
                </q-card-section>
              </q-card>

              <q-item-label class="bg-light-blue-6 text-h6 text-center"
                ><q-item-label text-body1-class="qweet-content"
                  >DN number - {{ REJFOC.dnnumber }}</q-item-label
                ></q-item-label
              >
              <q-item-label class="text-h5"
                ><strong>Free Of charge</strong></q-item-label
              >

              <q-separator />
              <q-parallax :height="150" :speed="0.5" src="white.jpg">
                <q-item-label text-weight-medium class="qweet-content"
                  >DN number = {{ REJFOC.dnnumber }}</q-item-label
                >
                <q-item-label class="qweet-content"
                  >E-mail - {{ REJFOC.Homeemail }}
                </q-item-label>
                <q-item-label class="qweet-content"
                  >user-name - {{ REJFOC.Homeuser }}
                </q-item-label>

                <!-- <q-item-label class="qweet-content"
                  >user-name - {{ REJFOC.Homeuser }}
                </q-item-label> -->

                <q-item-label text-body1-class="qweet-content"
                  >Approved by (E-mail) - {{ REJFOC.aceEmail }}
                </q-item-label>
                <q-item-label text-body1-class="qweet-content"
                  >Approved by(UserName) - {{ REJFOC.aceUser }}
                </q-item-label>
                <!-- <q-item-label text-weight-medium class='qweet-content' >Time        = {{REJFOC.time}}</q-item-label> -->
                <q-item-label text-weight-medium class="qweet-content"
                  >Date = {{ REJFOC.date }}</q-item-label
                >
                <q-item-label text-weight-medium class="qweet-content"
                  >Location = {{ REJFOC.Location }}</q-item-label
                >

                <q-item-label text-weight-medium class="qweet-content"
                  >PhoneNumber = {{ REJFOC.phonenum }}
                </q-item-label>

                <q-btn
                  icon="fa fa-download"
                  label="Download PNG"
                  color="black"
                  class="float-right"
                  @click="SaveImage"
                  flat
                  dense
                >
                  <q-tooltip>Download</q-tooltip>
                </q-btn>

                <q-btn
                  color="blue-grey-10"
                  outline
                  label="Donwload"
                  @click="donwloadCanvas"
                />

                <q-img
                  src="BAR1.png"
                  loading="lazy"
                  spinner-color="white"
                  height="140px"
                  style="max-width: 150px"
                />
              </q-parallax>

              <div class="q-pa-md">
                <q-table
                  card-class="bg-cyan-4 text-black"
                  title="Treats"
                  :rows="REJFOC.rows"
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
              <!-- <q-btn color="green"  icon-right="send" label="ok" /> -->
            </q-item-section>
          </q-expansion-item>
        </div>
      </q-item>

      <!-- sdfghjkjhgfdfhgjkghfdghjhf -->
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
            <q-item-label class="bg-positive text-h6 text-center"
              >DN has Apporoved</q-item-label
            >

            <q-card dark bordered class="bg-grey-9 my-card">
              <q-card-section>
                <div class="text-h6">
                  comment by {{ DNTBR.aceEmail }}(Supervisor)-
                </div>
                ``
                <div class="text-subtitle2">{{ DNTBR.CommentTBR }}</div>
              </q-card-section>
            </q-card>

            <!-- <q-card dark bordered class="bg-grey-9 my-card">
              <q-card-section>
                <div class="text-h6"> Supervisor's comment - </div>
                <div class="text-subtitle2">{{ DNTBR.CommentTBR }}</div>
              </q-card-section>
            </q-card> -->

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
                    <q-item-label class="qweet-content"
                      >Comment supe = {{ DNTBR.CommentTBR }}</q-item-label
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
                    <q-item-label class="qweet-content"
                      >Location = {{ DNTBR.Location }}</q-item-label
                    >
                    <q-item-label text-body1-class="qweet-content"
                      >Approved by (E-mail) - {{ DNTBR.aceEmail }}
                    </q-item-label>
                    <q-item-label text-body1-class="qweet-content"
                      >Approved by(UserName) - {{ DNTBR.aceUser }}
                    </q-item-label>
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

                  <!-- <q-btn color="green"  icon-right="send" label="ok" /> -->

                  <q-separator />
                </q-item-section>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
      </q-item>

      <!-- list end -->

      <!-- Rejected tbr -->

      <q-item v-for="REJTBR in REJtbr" :key="REJTBR.id" class="q-py-md">
        <div style="width: 1050px">
          <q-expansion-item
            class="shadow-1 overflow-hidden"
            style="border-radius: 30px"
            icon="explore"
            :label="REJTBR.dnnumber"
            @show="startCounting"
            @hide="stopCounting"
            header-class="bg-red-9 text-black"
            expand-icon-class="text-white"
          >
            <q-item-section>
              <q-item-label class="bg-negative text-h6 text-center"
                >DN has Rejected</q-item-label
              >

              <q-card dark bordered class="bg-grey-9 my-card">
                <q-card-section>
                  <div class="text-h6">
                    comment by {{ REJTBR.aceEmail }}(Supervisor)-
                  </div>
                  <div class="text-subtitle2">{{ REJTBR.CommentTBR }}</div>
                </q-card-section>
              </q-card>

              <q-item-label class="bg-warning text-h6 text-center"
                ><q-item-label text-body1-class="qweet-content"
                  >DN number - {{ REJTBR.dnnumber }}</q-item-label
                ></q-item-label
              >

              <q-item-label class="text-h5"
                ><strong>To be return</strong></q-item-label
              >

              <q-parallax :height="150" :speed="0.5" src="white.jpg">
                <q-item-label class="qweet-content"
                  >DN number = {{ REJTBR.dnnumber }}</q-item-label
                >
                <q-item-label class="qweet-content"
                  >Email - {{ REJTBR.Homeemail }}
                </q-item-label>
                <q-item-label class="qweet-content"
                  >Username - {{ REJTBR.Homeuser }}
                </q-item-label>

                <q-item-label text-body1-class="qweet-content"
                  >Approved by (E-mail) - {{ REJTBR.aceEmail }}
                </q-item-label>
                <q-item-label text-body1-class="qweet-content"
                  >Approved by(UserName) - {{ REJTBR.aceUser }}
                </q-item-label>

                <!-- <q-item-label class='qweet-content' >Time        = {{REJTBR.time}}</q-item-label> -->
                <q-item-label class="qweet-content"
                  >To be return Date = {{ REJTBR.date }}</q-item-label
                >
                <q-item-label class="qweet-content"
                  >Location = {{ REJTBR.Location }}</q-item-label
                >
                <q-item-label class="qweet-content"
                  >PhoneNumber = {{ REJTBR.phonenum }}
                </q-item-label>

                <q-btn
                  icon="fa fa-download"
                  label="Download PNG"
                  color="black"
                  class="float-right"
                  @click="SaveImage"
                  flat
                  dense
                >
                  <q-tooltip>Download PNG</q-tooltip>
                </q-btn>

                <q-img
                  src="BAR1.png"
                  loading="lazy"
                  spinner-color="white"
                  height="140px"
                  style="max-width: 150px"
                />
              </q-parallax>

              <q-separator />

              <div class="q-pa-md">
                <q-table
                  card-class="bg-warning text-black"
                  title="Items"
                  :rows="REJTBR.rows"
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
                <!-- <q-btn color="green"  icon-right="send" label="ok" /> -->
              </div>
              <q-separator />
            </q-item-section>
          </q-expansion-item>
        </div>
      </q-item>

      <!-- SFGHJGFDSDFGFH -->

      <div class="text-subtitle2"></div>

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
import { Countdown } from "vue3-flip-countdown";
import VueQrious from "vue-qrious";
import { ref } from "vue";

import db from "src/boot/firebase";

import { uid } from "quasar";
import firebase from "firebase/compat/app";

export default {
  name: "App",
  components: {
    Countdown,
  },

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
      REJfoc: [],
      REJtbr: [],
      DnFormTBR: [],
      qweets: [],

      index: "",
      index2: "",
      indexAll: "",
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
    donwloadCanvas() {
      const canvas = document.getElementsByTagName("canvas");
      const link = document.createElement("a");
      link.download = "QRCode.png";
      link.href = canvas[0].toDataURL();
      link.click();
    },

    randomNumber() {
      db.collection("Home1FocData")
        .get()
        .then((querySnapshot) => {
          this.index = querySnapshot.size;

          console.log(this.index);
        });
      return +this.index;
    },

    randomNumber2() {
      db.collection("Home1TbrData")
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
    onSubmit() {},

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
    db.collection("Home1TbrData").onSnapshot((snapshot) => {
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

    db.collection("RejectedFOC").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let qweetChangerej = change.doc.data();
        qweetChangerej.id = change.doc.id;
        if (change.type === "added") {
          console.log("New REJFOC: ", qweetChangerej);
          this.REJfoc.unshift(qweetChangerej);
        }
        if (change.type === "modified") {
          console.log("Modified REJFOC: ", qweetChangerej);
        }
        if (change.type === "removed") {
          console.log("Removed REJFOC: ", qweetChangerej);
          let index = this.DnFormTBR.findIndex(
            (DNTBR) => DNTBR.id === qweetChangerej.id
          );
          this.DnFormTBR.splice(index, 1);
        }
      });
    });

    db.collection("RejectedTBR").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let qweetChangerej = change.doc.data();
        qweetChangerej.id = change.doc.id;
        if (change.type === "added") {
          console.log("New REJTBR: ", qweetChangerej);
          this.REJtbr.unshift(qweetChangerej);
        }
        if (change.type === "modified") {
          console.log("Modified REJFOC: ", qweetChangerej);
        }
        if (change.type === "removed") {
          console.log("Removed REJFOC: ", qweetChangerej);
          let index = this.DnFormTBR.findIndex(
            (DNTBR) => DNTBR.id === qweetChangerej.id
          );
          this.DnFormTBR.splice(index, 1);
        }
      });
    });
  },
  SaveImage() {
    const linkSource = this.bar_chart.getDataURL();
    const downloadLink = document.createElement("a");
    document.body.appendChild(downloadLink);
    downloadLink.href = linkSource;
    downloadLink.target = "_self";
    downloadLink.download = "BarChart.png";
    downloadLink.click();
  },
  
  components: {
    VueQrious,
  },
};
</script>
<style lang="sass">
.divider

.qweet-content
  white-space: pre-line
</style>
