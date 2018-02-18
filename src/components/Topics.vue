<template>

    <div class="hello row">
        <div class="col s4" v-for="topic in topics" :key="topic.title">
          <q-card inline>
            <q-card-title>
                {{ topic.title }}
            </q-card-title>

            <q-card-separator />

            <q-card-main>
                <p>{{ topic.subtitle }}</p>
                <p class="text-faded">
                    {{ topic.description }}
                </p>
            </q-card-main>

            <q-card-separator />

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
  },
  computed: {
    topics () {
      return this.$store.getters.topics
    }
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

.q-card-main 
    padding-bottom 0

.q-card-actions
    display block

.bigger
    width 450px

@media (max-width $breakpoint-xs-max)
    .q-card
        width 100%

</style>
