<template>
  <div>
    <Login />
  </div>
</template>

<script>
import Login from '../modals/Login'

export default {
  name: 'ModalWrapper',
  data () {
    return {
      loginOpen: false
    }
  },
  components: {
    Login
  }
}
</script>
