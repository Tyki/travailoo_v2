<template>
  <v-dialog v-model="showLogin">
  </v-dialog>
</template>

<script>
export default {
  name: 'LoginModal',
  data () {
    showLogin: this.openModal
  },
  computed: {
    openModal () {
      return this.$store.state.layout.loginModalOpen
    }
  },
  watch: {
    showLogin: function (value) {
      console.log(value)
    },
    openModal: function (value) {
      this.showLogin = value
    }
  }
}
</script>

