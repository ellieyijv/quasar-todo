<template>
  <q-page padding>
    <q-list bordered padding>
      <q-item-label header>Settings</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hours time format</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle color="orange" v-model="timeFormat" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show tasks in one list</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-toggle color="green" v-model="listFormat" />
        </q-item-section>
      </q-item>
    </q-list>
    <q-list bordered padding class="q-my-md">
      <q-item-label header>More</q-item-label>

      <q-item tag="label" v-ripple to="/settings/help">
        <q-item-section>
          <q-item-label>Help</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item tag="label" @click="visitWebsite" v-ripple>
        <q-item-section>
          <q-item-label>Visit our website</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item tag="label" @click="emailUs" v-ripple>
        <q-item-section>
          <q-item-label>Email us</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { openURL } from 'quasar'

export default {
  computed: {
    ...mapState('settings', ['settings']),
    timeFormat: {
      get () {
        return this.settings.timeFormat
      },
      set (value) {
        this.setTimeFormat(value)
      }
    },
    listFormat: {
      get () {
        return this.settings.listFormat
      },
      set (value) {
        this.setListFormat(value)
      }
    }
  },
  methods: {
    ...mapActions('settings', ['setTimeFormat', 'setListFormat']),
    visitWebsite () {
      openURL('http://www.google.com')
    },
    emailUs () {
      window.location.href = 'mailto:test@abc.com?subject=requirement'
    }
  }
}
</script>
<style>

</style>
