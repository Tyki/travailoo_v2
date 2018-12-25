<script>

export default {
  methods: {
    openLeftPanel () {
      console.log('la')
      this.$eventBus.bus.$emit(this.$eventBus.events.SET_LEFT_PANEL, true)
    },
    closeLeftPanel () {
      this.$eventBus.bus.$emit(this.$eventBus.events.SET_LEFT_PANEL, false)
    },
    openLoginModal () {
      this.$eventBus.bus.$emit(this.$eventBus.events.MODAL_LOGIN)
    }
  },
  render: () => ({})
}
</script>
