<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Mon profil</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn red flat @click="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-list subheader>
          <v-subheader>
            Mes compétences
            <v-spacer />
            <v-btn v-if="!addSkillInput" @click="addSkillInput = true">Ajouter une compétence</v-btn>
          </v-subheader>

          <v-list-tile v-if="userSkills.length > 0">
            <v-list-tile-content>
              <!-- User Skills -->
              <v-layout row wrap>
                <v-chip close @input="removeSkill(key)" v-for="(skill, key) in userSkills" :key="key">
                  {{skill}}
                </v-chip>
              </v-layout>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile v-if="addSkillInput">
            <v-layout>
              <v-flex xs4>
                <form v-on:submit.prevent="addSkill">
                  <v-text-field v-model="skill" label="Ajouter une compétence..." required ref="skill" />
                </form>
              </v-flex>
              <v-btn @click="addSkill">Ajouter à la liste</v-btn>
            </v-layout>
          </v-list-tile>
        </v-list>

        <v-list subheader>
          <v-subheader>
            Mes expériences
          </v-subheader>

          <v-list-tile v-if="userExperiences.length > 0">
            <v-list-tile-content>
              <!-- User Skills -->
              <v-layout row wrap>
                {{ userExperiences }}
              </v-layout>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile v-if="addExperience">
            <v-layout>
              <v-flex xs4>
                <form v-on:submit.prevent="addExperience">
                  <v-text-field v-model="skill" label="Ajouter une compétence..." required ref="skill" />
                </form>
              </v-flex>
              <v-btn @click="addSkill">Ajouter à la liste</v-btn>
            </v-layout>
          </v-list-tile>

        </v-list>

      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'UserProfile',
  data: function () {
    return {
      dialog: true,
      addSkillInput: false,
      skill: '',
      userSkills: ['coucou']
    }
  },
  methods: {
    addSkill (event) {
      if (this.skill !== '') {
        this.userSkills.push(this.skill)
        this.skill = ''
      }
    },
    removeSkill (skillKey) {
      this.userSkills = this.userSkills.filter((value, key) => key !== skillKey)
    }
  },
  mounted () {
    this.$eventBus.bus.$on(this.$eventBus.events.MODAL_PROFILE, () => {
      this.dialog = true
    })

    // Fetch user data
    if (this.userSkills.length === 0) {
      this.addSkillInput = true
    }
  },
  destroyed () {
    this.$eventBus.bus.$off(this.$eventBus.events.MODAL_PROFILE)
  }
}
</script>
