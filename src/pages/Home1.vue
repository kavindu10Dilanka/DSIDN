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

  
    
    <q-toolbar class="bg-blue-grey-9 text-white">
      
      <div class=" box_4">
        <q-card class="shadow" shadow-2>
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

<!-- buttons -->
 <div class="q-pa-md" >
          <q-btn-group spread>
            
               <q-btn
              to="/LiveChat"
              color="green"
              icon="mail"
              label="Live Chat"
            />
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



<!-- 
      <q-toolbar-title> </q-toolbar-title>

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

    <!-- <q-list bordered padding class="bg-amber-2"> -->
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
            @click="alert('Hello World')"
          ></q-btn>
          <q-btn
            to="/Tobe"
            color="green-7"
            push
            label="To Be Returned DN"
            glossy
            text-color="black"
            icon="visibility"
            @click="() => alert('The Second Button')"
          ></q-btn>
          <q-btn
            to="/Rej"
            color="green-7"
            glossy
            text-color="black"
            push
            label="Rejected  Free of Charge DN"
            icon="update"
            @click="showAlert('The Third Button')"
          ></q-btn>
          <q-btn
            to="/Rejtobe"
            color="green-7"
            glossy
            text-color="black"
            ppush
            label="Rejected  Tobe Returned DN"
            icon="mail"
            @click="showAlert('The Fourth Button')"
          ></q-btn>
        </q-btn-group>
      </div>
    </div> -->

    <!-- //list -->

    <!-- //list REJ FOOC SECUU-->

    <q-item v-for="REJFOCseccc in REJfocsec" :key="REJFOCseccc.id">
      <div style="width: 1000px">
        <q-expansion-item
          class="shadow-1 overflow-hidden"
          style="border-radius: 30px"
          icon="explore"
          :label="REJFOCseccc.dnnumber"
          @show="startCounting"
          @hide="stopCounting"
          header-class="bg-red-9 text-white"
          expand-icon-class="text-black"
        >
          <q-item-label class="bg-red text-h6 text-center"
            >DN has Rejected by security</q-item-label
          >

          <q-card dark bordered class="bg-grey-9 my-card">
            <q-card-section>
              <div class="text-h6">comment by security -</div>
              <div class="text-subtitle2">{{ REJFOCseccc.SECommentFoc }}</div>
            </q-card-section>
          </q-card>

          <q-card>
            <q-card-section>
              <q-item-section>
                <q-item-label class="bg-light-blue-6 text-h6 text-center"
                  ><q-item-label text-body1-class="qweet-content"
                    >DN number - {{ REJFOCseccc.dnnumber }}</q-item-label
                  ></q-item-label
                >

                <q-parallax :height="150" :speed="0.5" src="white.jpg">
                  <q-item-label class="text-h5"
                    ><strong>Free Of charge</strong></q-item-label
                  >
                  <q-item-label text-body1-class="qweet-content"
                    >DN number - {{ REJFOCseccc.dnnumber }}</q-item-label
                  >
                  <q-item-label text-body1-class="qweet-content"
                    >Sec Comment - {{ REJFOCseccc.SECommentFoc }}
                  </q-item-label>
                  <q-item-label text-body1-class="qweet-content"
                    >DN by(E-mail) - {{ REJFOCseccc.Homeemail }}
                  </q-item-label>
                  <q-item-label text-body1-class="qweet-content"
                    >DN by(Username) - {{ REJFOCseccc.Homeuser }}
                  </q-item-label>
                  <q-item-label text-body1-class="qweet-content"
                    >Approved by (E-mail) - {{ REJFOCseccc.aceEmail }}
                  </q-item-label>
                  <q-item-label text-body1-class="qweet-content"
                    >Approved by(UserName) - {{ REJFOCseccc.aceUser }}
                  </q-item-label>
                  <!-- <q-item-label text-body1-class='qweet-content' >Time            - {{DN.time}}</q-item-label> -->
                  <q-item-label text-body1-class="qweet-content"
                    >Date - {{ REJFOCseccc.date }}</q-item-label
                  >
                  <q-item-label text-body1-class="qweet-content"
                    >Location - {{ REJFOCseccc.Location }}</q-item-label
                  >
                  <q-item-label ttext-body1-class="qweet-content"
                    >Hotline - {{ REJFOCseccc.phonenum }}</q-item-label
                  >
                </q-parallax>

                <div class="q-pa-md">
                  <q-table
                    card-class="bg-cyan-4 text-black"
                    title="Items"
                    :rows="REJFOCseccc.rows"
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
                  v-model="comentSecREJ"
                  placeholder="What's going on?"
                  autogrow
                  counter
                  maxlength="280"
                >
                  <template v-slot:before>
                    <q-avatar size="m"> </q-avatar>
                  </template>

                  <!-- <template v-slot:after>
                        <q-btn
                          @click="addNewQweet"
                          :disabled="!newQweetContent"
                          unelevated
                          rounded
                          color="primary"
                          label="save"
                        />
                      </template> -->

                  <div class="q-pa-s">
                    <q-btn-group spread>
                      <q-btn
                        color="negative"
                        label="Push the DN"
                        @click="deleteDNsec(REJFOCseccc, comentSecREJ)"
                      />

                      <!-- <q-btn
                          color="positive"
                          label="Accept the DN"
                          icon="timeline"
                          glossy
                          text-color="black"
                          @click="toExecutive(DN)"
                        /> -->
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

    <!-- //list REJ  SECUU-->

    <q-item v-for="REJtbrseccc in REJtbrsec" :key="REJtbrseccc.id">
      <div style="width: 1000px">
        <q-expansion-item
          class="shadow-1 overflow-hidden"
          style="border-radius: 30px"
          icon="explore"
          :label="REJtbrseccc.dnnumber"
          @show="startCounting"
          @hide="stopCounting"
          header-class="bg-red-9 text-white"
          expand-icon-class="text-black"
        >
          <q-item-label class="bg-red text-h6 text-center"
            >DN has Rejected by security</q-item-label
          >

          <q-card dark bordered class="bg-grey-9 my-card">
            <q-card-section>
              <div class="text-h6">comment by security -</div>
              <div class="text-subtitle2">{{ REJtbrseccc.SECommentTBR }}</div>
            </q-card-section>
          </q-card>

          <q-card>
            <q-card-section>
              <q-item-section>
                <q-item-label class="bg-light-blue-6 text-h6 text-center"
                  ><q-item-label text-body1-class="qweet-content"
                    >DN number - {{ REJtbrseccc.dnnumber }}</q-item-label
                  ></q-item-label
                >

                <q-parallax :height="150" :speed="0.5" src="white.jpg">
                  <q-item-label class="text-h5"
                    ><strong>Free Of charge</strong></q-item-label
                  >
                  <q-item-label text-body1-class="qweet-content"
                    >DN number - {{ REJtbrseccc.dnnumber }}</q-item-label
                  >
                  <q-item-label text-body1-class="qweet-content"
                    >Sec Comment - {{ REJtbrseccc.SECommentTBR }}
                  </q-item-label>
                  <q-item-label text-body1-class="qweet-content"
                    >DN by(E-mail) - {{ REJtbrseccc.Homeemail }}
                  </q-item-label>
                  <q-item-label text-body1-class="qweet-content"
                    >DN by(Username) - {{ REJtbrseccc.Homeuser }}
                  </q-item-label>
                  <q-item-label text-body1-class="qweet-content"
                    >Approved by (E-mail) - {{ REJtbrseccc.aceEmail }}
                  </q-item-label>
                  <q-item-label text-body1-class="qweet-content"
                    >Approved by(UserName) - {{ REJtbrseccc.aceUser }}
                  </q-item-label>
                  <!-- <q-item-label text-body1-class='qweet-content' >Time            - {{DN.time}}</q-item-label> -->
                  <q-item-label text-body1-class="qweet-content"
                    >Date - {{ REJtbrseccc.date }}</q-item-label
                  >
                  <q-item-label text-body1-class="qweet-content"
                    >Location - {{ REJtbrseccc.Location }}</q-item-label
                  >
                  <q-item-label ttext-body1-class="qweet-content"
                    >Hotline - {{ REJtbrseccc.phonenum }}</q-item-label
                  >
                </q-parallax>

                <div class="q-pa-md">
                  <q-table
                    card-class="bg-cyan-4 text-black"
                    title="Items"
                    :rows="REJtbrseccc.rows"
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
                  v-model="comentSecREJTBR"
                  placeholder="What's going on?"
                  autogrow
                  counter
                  maxlength="280"
                >
                  <template v-slot:before>
                    <q-avatar size="m"> </q-avatar>
                  </template>

                  <!-- <template v-slot:after>
                        <q-btn
                          @click="addNewQweet"
                          :disabled="!newQweetContent"
                          unelevated
                          rounded
                          color="primary"
                          label="save"
                        />
                      </template> -->

                  <div class="q-pa-s">
                    <q-btn-group spread>
                      <q-btn
                        color="negative"
                        label="Push the DN"
                        @click="deleteDNsecTBR(REJtbrseccc, comentSecREJTBR)"
                      />

                      <!-- <q-btn
                          color="positive"
                          label="Accept the DN"
                          icon="timeline"
                          glossy
                          text-color="black"
                          @click="toExecutive(DN)"
                        /> -->
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
                  v-model="ComentFOC"
                  placeholder="What's going on?"
                  autogrow
                  counter
                  maxlength="280"
                >
                  <template v-slot:before>
                    <q-avatar size="m"> </q-avatar>
                  </template>

                  <!-- <template v-slot:after>
                      <q-btn
                        @click="toExecutive"
                        :disabled="!newQweetContent"
                        unelevated
                        rounded
                        color="primary"
                        label="save"
                      />
                    </template> -->

                  <div class="q-pa-s">
                    <q-btn-group spread>
                      <q-btn
                        color="negative"
                        label="Push the DN"
                        @click="deleteDN(DN, ComentFOC)"
                      />
                      <q-btn
                        color="positive"
                        label="Accept the DN"
                        glossy
                        text-color="black"
                        @click="toExecutive(DN,ComentFOC)"
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
                  v-model="commentTBR"
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

                  <!-- <template v-slot:after>
                      <q-btn
                        @click="addNewQweet"
                        :disabled="!newQweetContent"
                        unelevated
                        rounded
                        color="primary"
                        label="save"
                      />
                    </template> -->

                  <div class="q-pa-s">
                    <q-btn-group spread>
                      <q-btn
                        color="negative"
                        label="Push the DN"
                        glossy
                        @click="deleteDNTBR(DNTBR, commentTBR)"
                      />
                      <q-btn
                        color="positive"
                        label="Accept the DN"
                        glossy
                        text-color="black"
                        @click="toExecutiveTBR(DNTBR, commentTBR)"
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

    <!-- </q-list> -->
    <q-separator inset="item" />

    <div class="text-subtitle2"></div>

    <q-separator />
    <div class="text-bold" align="center"></div>

    <q-card-actions align="right">
      <div align="bottom"></div>

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
</template>

<script>
import { ref } from "vue";

import db from "src/boot/firebase";

import { uid } from "quasar";
import firebase from "firebase/compat/app";
import { id } from "date-fns/locale";

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
      tagEmail: "",
      temUser: "",
      DnForm: [],
      NEWDN: [],
      DnFormTBR: [],
      qweets: [],
      REJfocsec: [],
      REJtbrsec: [],

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
    randomNumber() {
      db.collection("DNformDataFOC")
        .get()
        .then((querySnapshot) => {
          this.index = querySnapshot.size;

          console.log(this.index);
        });
      return +this.index;
    },

    randomNumber2() {
      db.collection("DNformDataTBR")
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

    toExecutive(DN,ComentFOC) {
       console.log(ComentFOC, "hgggggggg");
       DN.commentfoc = ComentFOC;
      // console.log(ComentFOC, "dggggggggg", DN.commentfoc);

      this.tagEmail = this.email;
      DN.aceEmail = this.email;
      DN.aceUser = this.user;
      console.log("hhghhghhg", DN.aceEmail);

      db.collection("approvedByPBSfoc")
        .add(DN)
        .then((docRef) => {
          console.log("Document written with ID: ", this.email);
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });

      db.collection("Home1FocData")
        .add(DN)
        .then((docRef) => {
          console.log("Document written with ID:Home1FocData ", docRef.id);
        });

      db.collection("DNformDataFOC")
        .doc(DN.id)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!", DN);
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    },

    toExecutiveTBR(DNTBR,commentTBR) {
       DNTBR.CommentTBR = commentTBR;

      this.tagEmail = this.email;
      DNTBR.aceEmail = this.email;
      DNTBR.aceUser = this.user;
      console.log("hhghhghhg", DNTBR.aceEmail);

      db.collection("approvedByPBtbr")
        .add(DNTBR)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
      db.collection("DNformDataTBR")
        .doc(DNTBR.id)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });

      db.collection("Home1TbrData")
        .add(DNTBR)
        .then((docRef) => {
          console.log("Document written with ID:Home1TbrData ", docRef.id);
        });
    },

    deleteDNTBR(DNTBR, commentTBR) {
      DNTBR.CommentTBR = commentTBR;

      this.tagEmail = this.email;
      DNTBR.aceEmail = this.email;
      DNTBR.aceUser = this.user;
      console.log("hhghhghhg", DNTBR.aceEmail);

      db.collection("RejectedTBR")
        .add(DNTBR)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
      db.collection("DNformDataTBR")
        .doc(DNTBR.id)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document:   ", error);
        });
    },

    deleteDNsec(REJFOCseccc, comentSecREJ) {
      REJFOCseccc.CommentFOC = comentSecREJ;

      db.collection("RejectedFOC")
        .add(REJFOCseccc)
        .then((docRef) => {
          console.log("Document written with ID:RejectedFOC ", docRef.id);

          db.collection("RejectedBySECFOC")
            .doc(REJFOCseccc.id)
            .delete()
            .then(function () {
              console.log("Document successfully deleted!");
            });
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    },

    deleteDNsecTBR(REJtbrseccc, comentSecREJTBR) {
      REJtbrseccc.CommentTBR = comentSecREJTBR;

      db.collection("RejectedTBR")
        .add(REJtbrseccc)
        .then((docRef) => {
          console.log("Document written with ID:RejectedFOC ", docRef.id);

          db.collection("RejectedBySECTBR")
            .doc(REJtbrseccc.id)
            .delete()
            .then(function () {
              console.log("Document successfully deleted!");
            });
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    },

    deleteDN(DN, commentfoc) {
      console.log("oooo", commentfoc);
      DN.CommentFOC = commentfoc;
      db.collection("RejectedFOC")
        .add(DN)
        .then((docRef) => {
          console.log("Document written with ID:RejectedFOC ", docRef.id);

          db.collection("DNformDataFOC")
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
  },
  //   deleteDN(DN) {
  //   db.collection("RejectedFOC")
  //     .add(DN)
  //     .then((docRef) => {
  //       console.log("Document written with ID:RejectedFOC ", docRef.id);

  //       db.collection("DNformDataFOC")
  //         .doc(DN.id)
  //         .delete()
  //         .then(function () {
  //           console.log("Document successfully deleted!");
  //         });
  //     })
  //     .catch(function (error) {
  //       console.error("Error removing document: ", error);
  //     });
  // },

  //sec delte button

  //secccc

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
    db.collection("DNformDataFOC").onSnapshot((snapshot) => {
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

    db.collection("RejectedBySECFOC").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let qweetChangerej = change.doc.data();
        qweetChangerej.id = change.doc.id;
        if (change.type === "added") {
          console.log("New REJFOCseccc: ", qweetChangerej);
          this.REJfocsec.unshift(qweetChangerej);
        }
        if (change.type === "modified") {
          console.log("Modified REJFOCsec: ", qweetChangerej);
        }
        if (change.type === "removed") {
          console.log("Removed REJFOCsec: ", qweetChangerej);
          let index = this.DnFormTBR.findIndex(
            (DNTBR) => DNTBR.id === qweetChangerej.id
          );
          this.DnFormTBR.splice(index, 1);
        }
      });
    });

    // db.collection("RejectedBySECFOC").onSnapshot((snapshot) => {
    //       snapshot.docChanges().forEach((change) => {
    //         let qweetChangerej = change.doc.data();
    //         qweetChangerej.id = change.doc.id;
    //         if (change.type === "added") {
    //           console.log("New REJFOCseccc: ", qweetChangerej);
    //           this.REJfocsec.unshift(qweetChangerej);
    //         }
    //         if (change.type === "modified") {
    //           console.log("Modified REJFOCsec: ", qweetChangerej);
    //         }
    //         if (change.type === "removed") {
    //           console.log("Removed REJFOCsec: ", qweetChangerej);
    //           let index = this.DnFormTBR.findIndex(
    //             (DNTBR) => DNTBR.id === qweetChangerej.id
    //           );
    //           this.DnFormTBR.splice(index, 1);
    //         }
    //       });
    //     });

    db.collection("RejectedBySECTBR").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let qweetChangerej = change.doc.data();
        qweetChangerej.id = change.doc.id;
        if (change.type === "added") {
          console.log("New REJtbrseccc: ", qweetChangerej);
          this.REJtbrsec.unshift(qweetChangerej);
        }
        if (change.type === "modified") {
          console.log("Modified REJFOCsec: ", qweetChangerej);
        }
        if (change.type === "removed") {
          console.log("Removed REJFOCsec: ", qweetChangerej);
          let index = this.DnFormTBR.findIndex(
            (DNTBR) => DNTBR.id === qweetChangerej.id
          );
          this.DnFormTBR.splice(index, 1);
        }
      });
    });

    db.collection("DNformDataTBR").onSnapshot((snapshot) => {
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
