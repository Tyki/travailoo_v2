import Vue from 'vue'
import * as events from './events'

const bus = new Vue()

const eventBus = {
  events,
  bus
}

export default eventBus
