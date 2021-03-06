import Vue from 'vue'
import {mapState, mapActions} from 'vuex'

Vue.mixin({
  data () {
    return {
    }
  },

  computed: {
    $currentLang () {
      return Vue.config.lang || 'ro'
    },

    ...mapState([
      '$userInfo'
    ])
  },

  methods: {
    ...mapActions([
      '$getUserInfo',
      '$setMenuList',
      '$setCarList',
      '$setFavoritesList'
    ]),

    $triggerSidenav () {
      let app = document.getElementById('app')
      app.className = !app.className ? 'menu-expand' : ''
    }
  }
})
