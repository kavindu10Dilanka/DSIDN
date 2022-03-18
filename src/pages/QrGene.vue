<template>
  <q-page class="container">
    <div class="row justify-center">
      <div class="col-12 q-pt-lg text-center text-blue-grey-9">
        <span class="text-subtitle1">
          Enter the String you want to insert into your custom QRCode.
        </span>
      </div>
      <div class="col-10 q-pt-lg">
        <q-input rounded outlined v-model="text" label="Value" />
      </div>
      <div class="col-12 q-pt-md text-center">
        <vue-qrious :value="text" :size="230" />
      </div>
      <q-btn
        color="blue-grey-10"
        outline
        label="Donwload"
        @click="donwloadCanvas"
      />
    </div>
  </q-page>
</template>

<script>
import VueQrious from "vue-qrious";

import db from "src/boot/firebase";

export default {
  name: "Generator",
  data() {
    return {
      DnForm: [],
      DnFormTBR: [],
      text: "",
    };
  },
  methods: {
    donwloadCanvas() {
      const canvas = document.getElementsByTagName("canvas");
      const link = document.createElement("a");
      link.download = "QRCode.png";
      link.href = canvas[0].toDataURL();
      link.click();
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

  components: {
    VueQrious,
  },
};
</script>
