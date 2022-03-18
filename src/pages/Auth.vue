<template>

<div class="bg-brown-9">

  <q-page class="flex q-pa-md">
    

    

    <q-card class="full-width">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="red"
        indicator-color="red"
        align="justify"
        narrow-indicator
      >
      

        
      </q-tabs>


      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <AuthComponent :tab="tab" />
        </q-tab-panel>

        
      </q-tab-panels>
    </q-card>
  </q-page>
</div>
</template>

<script>
import AuthComponent from "components/AuthComponent";
export default {
  components: { AuthComponent },
  data () {
    return {
      tab: 'login'
    }
  }
}
</script>
