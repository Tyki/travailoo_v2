<script>
import { SET_USER_JWT } from '@/store/user/types'

export default {
  computed: {
    isUserLogged () {
      return this.$store.state.user.jwt !== null
    }
  },
  methods: {
    disconnectUser () {
      this.$store.commit(SET_USER_JWT, null)
    }
  },
  render: () => ({})
}
</script>
