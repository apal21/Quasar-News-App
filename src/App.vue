<template>

  <div>

    <!-- Navbar -->
    <q-layout
      ref="layout"
      view="lHh Lpr fff"
      :left-class="{'light': true}"
    >
      <q-toolbar slot="header" color="tertiary">
        <q-btn
          flat
          @click="$refs.layout.toggleLeft()"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          {{ title }}
          <span slot="subtitle">
            Content
          </span>
        </q-toolbar-title>

        <q-btn flat>
          <q-icon name="more vert" @click="openActionSheets" />
        </q-btn>
      </q-toolbar>

      <div slot="left">

        <q-list no-border link inset-delimiter>
          <q-list-header>Essential Links</q-list-header>
          <q-item :class="this.$route.matched[0].path === '' ? 'active' : ''" @click="changePath('/')" v-ripple>
            <q-item-side icon="school" />
            <q-item-main label="News Index" />
          </q-item>
          <q-item :class="this.$route.matched[0].path === '/topics' ? 'active' : ''" @click="changePath('/topics')" v-ripple>
            <q-item-side icon="school" />
            <q-item-main label="Topics" />
          </q-item>
          <q-item :class="this.$route.matched[0].path === '/tips/:id' ? 'active' : ''" @click="changePath('/tips/url-of-tips-section')" v-ripple>
            <q-item-side icon="chat" />
            <q-item-main label="Tips" />
          </q-item>
          <q-item :class="this.$route.matched[0].path === '/tutorials/:id' ? 'active' : ''" v-ripple>
            <q-item-side icon="record_voice_over" />
            <q-item-main label="Tutorials" />
          </q-item>
          <q-item :class="this.$route.matched[0].path === '/dont know' ? 'active' : ''" v-ripple>
            <q-item-side icon="rss feed" />
            <q-item-main label="Don't Know" />
          </q-item>
        </q-list>
        
      </div>

      <!-- End Navbar -->

      <!-- Main app -->

      <div id="q-app">
        <main>
          <router-view></router-view>
        </main>
      </div>

      <!-- End app -->

    </q-layout>
  </div>
</template>

<script>
import {
  dom,
  event,
  openURL,
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  ActionSheet,
  Ripple
} from 'quasar'
const
  { viewport } = dom,
  { position } = event,
  moveForce = 30,
  rotateForce = 40,
  RAD_TO_DEG = 180 / Math.PI
function getRotationFromAccel (accelX, accelY, accelZ) {
  /* Reference: http://stackoverflow.com/questions/3755059/3d-accelerometer-calculate-the-orientation#answer-30195572 */
  const sign = accelZ > 0 ? 1 : -1
  const miu = 0.001
  return {
    roll: Math.atan2(accelY, sign * Math.sqrt(Math.pow(accelZ, 2) + miu * Math.pow(accelX, 2))) * RAD_TO_DEG,
    pitch: -Math.atan2(accelX, Math.sqrt(Math.pow(accelY, 2) + Math.pow(accelZ, 2))) * RAD_TO_DEG
  }
}
export default {
  directives: {
    Ripple
  },
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain
  },
  data () {
    return {
      orienting: window.DeviceOrientationEvent && !this.$q.platform.is.desktop,
      rotating: window.DeviceMotionEvent && !this.$q.platform.is.desktop,
      moveX: 0,
      moveY: 0,
      rotateY: 0,
      rotateX: 0
    }
  },
  computed: {
    position () {
      const transform = `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg)`
      return {
        top: this.moveY + 'px',
        left: this.moveX + 'px',
        '-webkit-transform': transform,
        '-ms-transform': transform,
        transform
      }
    },
    title () {
      if (this.$route.matched[0].path === '/topics') {
        document.title = 'News App - Topics'
        return 'Topics'
      }
      else if (this.$route.matched[0].path === '/tips/:id') {
        document.title = 'News App - Tips'
        return 'Tips'
      }
      document.title = 'News App'
      return 'News'
    }
  },
  methods: {
    changePath (path) {
      let width = viewport().width
      if (width < 992) {
        this.$refs.layout.hideLeft(() => {
          this.$router.push(path)
        })
      }
      else {
        this.$router.push(path)
      }
    },
    launch (url) {
      openURL(url)
    },
    move (evt) {
      const
        {width, height} = viewport(),
        {top, left} = position(evt),
        halfH = height / 2,
        halfW = width / 2
      this.moveX = (left - halfW) / halfW * -moveForce
      this.moveY = (top - halfH) / halfH * -moveForce
      this.rotateY = (left / width * rotateForce * 2) - rotateForce
      this.rotateX = -((top / height * rotateForce * 2) - rotateForce)
    },
    rotate (evt) {
      if (evt.rotationRate &&
          evt.rotationRate.beta !== null &&
          evt.rotationRate.gamma !== null) {
        this.rotateX = evt.rotationRate.beta * 0.7
        this.rotateY = evt.rotationRate.gamma * -0.7
      }
      else {
        /* evt.acceleration may be null in some cases, so we'll fall back
           to evt.accelerationIncludingGravity */
        const
          accelX = evt.acceleration.x || evt.accelerationIncludingGravity.x,
          accelY = evt.acceleration.y || evt.accelerationIncludingGravity.y,
          accelZ = evt.acceleration.z || evt.accelerationIncludingGravity.z - 9.81,
          rotation = getRotationFromAccel(accelX, accelY, accelZ)
        this.rotateX = rotation.roll * 0.7
        this.rotateY = rotation.pitch * -0.7
      }
    },
    orient (evt) {
      if (evt.beta === null || evt.gamma === null) {
        window.removeEventListener('deviceorientation', this.orient, false)
        this.orienting = false
        window.addEventListener('devicemotion', this.rotate, false)
      }
      else {
        this.rotateX = evt.beta * 0.7
        this.rotateY = evt.gamma * -0.7
      }
    },
    openActionSheets: () => {
      ActionSheet.create({
        title: 'My First ActionSheet',
        actions: [
          {
            label: 'Share',
            icon: 'share',
            handler: () => console.log('share')
          },
          {
            label: 'Delete',
            icon: 'delete',
            handler: () => console.log('delete')
          }
        ]
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.orienting) {
        window.addEventListener('deviceorientation', this.orient, false)
      }
      else if (this.rotating) {
        window.addEventListener('devicemove', this.rotate, false)
      }
      else {
        document.addEventListener('mousemove', this.move)
      }
    })
  },
  beforeDestroy () {
    if (this.orienting) {
      window.removeEventListener('deviceorientation', this.orient, false)
    }
    else if (this.rotating) {
      window.removeEventListener('devicemove', this.rotate, false)
    }
    else {
      document.removeEventListener('mousemove', this.move)
    }
  }
}
</script>

<style lang="stylus">


@import '~variables'

main
  min-height 100% !important
  height 100% !important

header
  margin 0
  height 10px
  background-color $primary

.logo-container
  width 255px
  height 242px
  perspective 800px
  position absolute
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)
  
.logo
  position absolute
  transform-style preserve-3d

</style>
