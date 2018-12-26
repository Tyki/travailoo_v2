<script>
import { SET_USER_JWT, LOG_USER } from '@/store/user/types'

export default {
  computed: {
    isUserLogged () {
      return this.$store.state.user.jwt !== null
    }
  },
  methods: {
    disconnectUser () {
      this.$store.commit(SET_USER_JWT, null)
    },
    connectUser (username, password) {
      if (username && password) {
        return this.$store.dispatch(LOG_USER, {username, password})
      } else {
        return Promise.reject(new Error('Invalid credentials'))
      }
    }
  },
  render: () => ({})
}
</script>
