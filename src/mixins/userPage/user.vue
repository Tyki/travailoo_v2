<script>
export default {
  computed: {
    isUserLogged () {
      return this.$store.state.user.jwt !== null
    }
  },
  render: () => ({})
}
</script>
