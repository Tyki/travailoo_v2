<template>
  <div>
    <Login />
    <UserProfile />
  </div>
</template>

<script>
import Login from '../modals/Login'
import UserProfile from '../modals/UserProfile'

export default {
  name: 'ModalWrapper',
  components: {
    Login,
    UserProfile
  },
  data () {
    return {
      loginOpen: false
    }
  }
}
</script>
