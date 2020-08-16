<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal bordered class="bg-primary text-accent">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="leftDrawer = !leftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="~assets/icon.png">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawer"
        show-if-above
        bordered
        content-class="bg-secondary text-white"

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item clickable v-ripple v-for="link in drawerLinks" :key="link.title">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>

            <q-item-section>
              {{link.title}}
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-secondary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="~assets/icon.png">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>

const linksData = [

]

export default {
  name: 'MainLayout',
  components: {},
  watch: {
    '$store.state.app.leftDrawer'(v) {
      console.log('$store.state.app.leftDrawer', v)}
  },
  data () {
    return {
      miniState: true,
    }
  },
  computed: {
    drawerLinks: {
      get() {
        return this.$store.state.app.drawerLinks
      }
    },
    leftDrawer: {
      get () {
        return this.$store.state.app.leftDrawer
      },
      set (value) {
        this.$store.commit('app/setLeftDrawer', value)
      }
    },
  },
  mounted () {},
  methods: {
  }
}
</script>
