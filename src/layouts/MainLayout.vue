<template>
  <q-layout view="lHh lpR fFf">

    <q-header reveal bordered class="bg-primary text-accent">
      <q-toolbar class="glossy">
        <q-btn dense flat round icon="menu" class="lt-md" @click="leftDrawer = !leftDrawer" />
        <q-space></q-space>
        <q-btn flat @click="searchForm = !searchForm"> <q-icon name="search" /> </q-btn>
        <q-btn flat> <q-icon name="settings" /> </q-btn>
      </q-toolbar>

      <q-toolbar v-if="searchForm" inset style="padding:0 15px">
        <div>465</div>
        <q-input dense rounded standout="bg-teal text-white" class="col-12" label="Search for something" v-model="searchQuery">
          <template v-slot:prepend> <q-icon name="search" /></template>
        </q-input>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawer"
        show-if-above
        content-class="bg-dark text-white"

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
    >
      <q-toolbar class="absolute-top">
        <q-toolbar-title>
          <q-avatar>
            <img src="~assets/icon.png">
          </q-avatar>
          Internet Radio
        </q-toolbar-title>
      </q-toolbar>

      <q-scroll-area style="height: calc(100% - 50px); margin-top: 50px;">
        <q-list padding>
          <q-item clickable v-ripple v-for="link in drawerLinks" :key="link.title"
                  tag="a"
                  target="_blank"
                  :href="link.link">
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
      <q-btn icon="play_arrow" size="xl"></q-btn>
<!--      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="~assets/icon.png">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
      <q-toolbar inset>
        <q-breadcrumbs active-color="white" style="font-size: 16px">
          <q-breadcrumbs-el label="Home" icon="home" />
          <q-breadcrumbs-el label="Components" icon="widgets" />
          <q-breadcrumbs-el label="Toolbar" />
        </q-breadcrumbs>
      </q-toolbar>-->
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
      searchForm: false,
      searchQuery: ''
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
