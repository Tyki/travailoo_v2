import Vue from 'vue'
import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  // To be used everytime you mount a component
  // Restriction due to vuetify using custom components
  let wrapper

  beforeEach(() => {
    Vue.use(Vuetify);

    wrapper = mount(App);
  });

  it('renders App.vue', () => {
    expect(wrapper.contains('.v-toolbar')).toBeTruthy()
  })
})
