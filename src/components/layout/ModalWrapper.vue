<template>
  <div>
    <Login />
  </div>
</template>

<script>
import Login from '../modals/Login'
import eventBus from '../../services/eventBus/eventbus.js'

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

