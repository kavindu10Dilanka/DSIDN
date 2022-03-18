<template>
<div class="bg-brown-9">

  <q-page class="flex q-pa-md">
    <q-card class="full-width">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
      </q-tabs>

    
        <q-tab-panel name="register">
          <AuthComponent1 :tab="tab"/>
        </q-tab-panel>
      
    </q-card>
  </q-page>

</div>
</template>

<script>
import AuthComponent1 from "components/AuthComponent1";
export default {
  components: { AuthComponent1 },
  data () {
    return {
     
    }
  }
}
</script>
