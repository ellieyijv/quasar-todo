<template>
  <q-layout view="lHh lpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Todo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-footer>
      <q-tabs>
        <q-route-tab icon="list" label="todo" to="/" />
        <q-route-tab icon="settings" label="settings" to="/settings" />
      </q-tabs>
    </q-footer>
    <q-drawer
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label
          header
          class="text-grey-6"
        >
        Navigation
        </q-item-label>
        <q-item v-for="nav in navs" :key="nav.label" clickable :to="nav.to" exact class="text-grey-5">
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{nav.label}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      navs: [
        {
          label: 'Todo',
          icon: 'list',
          to: '/'
        },
        {
          label: 'Settings',
          icon: 'settings',
          to: '/settings'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none
    }
  }
  .q-drawer {
    .q-router-link--exact-active {
      color: white !important;
    }
  }
</style>
