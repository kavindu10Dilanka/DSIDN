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
        <q-tab name="login" label="Login" />
        <q-tab name="register" label="Register" />
      </q-tabs>


      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <AuthComponent4 :tab="tab" />
        </q-tab-panel>

        <q-tab-panel name="register">
          <AuthComponent4 :tab="tab"/>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>

</div>
</template>

<script>
import AuthComponent4 from "components/AuthComponent4";
export default {
  components: { AuthComponent4 },
  data () {
    return {
      tab: 'login'
    }
  }
}
</script>
