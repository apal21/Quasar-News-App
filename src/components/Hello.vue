<template>

    <div class="hello row">
        <div class="col s4">
          <q-card inline>
            <q-card-title>
                JavaScript
                <span slot="subtitle">Subtitle</span>
            </q-card-title>
            <q-card-actions>
                <q-btn flat>Tips</q-btn>
                <q-btn flat>Tutorials</q-btn>
            </q-card-actions>
          </q-card>
        </div>

        <div class="col s4">
          <q-card inline>
            <q-card-title>
                PHP
                <span slot="subtitle">Subtitle</span>
            </q-card-title>
            <q-card-actions>
                <q-btn flat>Tips</q-btn>
                <q-btn flat>Tutorials</q-btn>
            </q-card-actions>
          </q-card>
        </div>

        <div class="col s4">
          <q-card inline>
            <q-card-title>
                Laravel
                <span slot="subtitle">Subtitle</span>
            </q-card-title>
            <q-card-actions>
                <q-btn flat>Tips</q-btn>
                <q-btn flat>Tutorials</q-btn>
            </q-card-actions>
          </q-card>
        </div>

        <div class="col s4">
          <q-card inline>
            <q-card-title>
                Android
                <span slot="subtitle">Subtitle</span>
            </q-card-title>
            <q-card-actions>
                <q-btn flat>Tips</q-btn>
                <q-btn flat>Tutorials</q-btn>
            </q-card-actions>
          </q-card>
        </div>
    </div>
  
</template>

<script>
import {
  QCard,
  QCardTitle,
  QCardMedia,
  QCardActions,
  QCardSeparator,
  QCardMain,
  QList,
  QItem,
  QItemMain,
  QItemSide,
  QItemTile,
  QCollapsible,
  QBtn,
  QParallax,
  QIcon,
  QPopover,
  QVideo
} from 'quasar'
export default {
  components: {
    QCard,
    QCardTitle,
    QCardMedia,
    QCardActions,
    QCardSeparator,
    QCardMain,
    QList,
    QItem,
    QItemMain,
    QItemSide,
    QItemTile,
    QCollapsible,
    QBtn,
    QParallax,
    QIcon,
    QPopover,
    QVideo
  }
}
</script>

<style lang="stylus" scoped>
.hello
  margin 50px 8px 0 8px
  a
    color #35495E

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

.q-card
    min-width 320px
    margin-top 10px

.q-card-actions
    display block
    text-align center

.bigger
    width 450px

@media (max-width $breakpoint-xs-max)
    .q-card
        width 100%

</style>
