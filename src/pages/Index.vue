<template>
  <q-page>
    <div class="row">
      <div v-if="!showCamera" class="col-12 text-center q-pt-md">
        <img alt="Quasar logo" src="/qr_code.svg" style="width: 340px" />
      </div>
    </div>
    <div class="row justify-center q-pt-lg">
      <div class="col-12 text-center">
        <span class="text-subtitle2 text-grey-9">
          {{ textInfo }}
        </span>
        <q-btn
          color="blue-grey-10"
          rounded
          icon="camera_alt"
          label="Read QRCode"
          class="full-width"
          size="lg"
          @click="turnCameraOn()"
          v-show="!showCamera"
        />

        <p class="text-subtitle1" v-if="result">
          Last result: <b>{{ result }}</b>
        </p>
        <div v-if="showCamera">
          <qrcode-stream :camera="camera" @decode="onDecode"> </qrcode-stream>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { QrcodeStream } from "vue-qrcode-reader/src/index";

import db from "src/boot/firebase";
import firebase from "firebase/compat/app";

export default {
  name: "PageIndex",
  components: { QrcodeStream },
  data() {
    return {
      DnForm: [],
      DnFormTBR: [],
      isValid: undefined,
      camera: "auto",
      result: null,
      showCamera: false,
    };
  },
  computed: {
    textInfo() {
      return this.showCamera
        ? "position the qrcode on the camera"
        : "Press the button and scan a qrcode.";
    },
  },
  methods: {
    async onDecode(content) {
      this.result = content;
      console.log(this.result, "asdfghjkl;");

      // console.log("hello",uid,email);
      //        var docRef = db.collection("Home1FocData").doc();
      //        console.log( "hariiiiii;")

      // docRef.get().then((doc) => {
      //     if (doc.exists) {

      //      if(doc.data().dnnumber==this.result){
      //        console.log( "hariiiiii;")
      //         //this.$router.push('/home')

      //       }else{
      //         console.log( "naneee")

      //       }
      //         //console.log("Document 2345678987654321234567 data:", doc.data('isUser'),);
      //         //alert("Signed in user!")

      //     } else {
      //         // doc.data() will be undefined in this case
      //         console.log("No such document!");
      //         //this.$router.push('/home')
      //         alert("you are not registerd yet")
      //         console.log(uid)
      //     }
      // }).catch((error) => {
      //     console.log("Error getting document:", error);

      // });
      this.turnCameraOff();
    },

    turnCameraOn() {
      console.log("showcamera");
      this.camera = "auto";
      this.showCamera = true;
    },

    turnCameraOff() {
      this.camera = "off";
      this.showCamera = false;
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
  },
};
</script>

<style scoped>
/* .validation-success,
.validation-failure,
.validation-pending {
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, .8);
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 10px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.validation-success {
  color: green;
}
.validation-failure {
  color: red;
} */
</style>
