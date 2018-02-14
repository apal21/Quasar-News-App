<template>

    <div class="hello row">
        <div class="col s4">
          <q-card inline>
            <q-card-title>
                JavaScript
            </q-card-title>

            <q-card-separator />

            <q-card-main>
                <p>Dynamic Frontend</p>
                <p class="text-faded">
                    JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn.
                </p>
            </q-card-main>

            <q-card-separator />

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
            </q-card-title>

            <q-card-separator />

            <q-card-main>
                <p>Server King</p>
                <p class="text-faded">
                    PHP is a server scripting language, and a powerful tool for making dynamic web pages.
                </p>
            </q-card-main>

            <q-card-separator />

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
            </q-card-title>

            <q-card-separator />

            <q-card-main>
                <p>Best in PHP</p>
                <p class="text-faded">
                    Love beautiful code? We do too. The PHP Framework For Web Artisans.
                </p>
            </q-card-main>

            <q-card-separator />

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
            </q-card-title>

            <q-card-separator />

            <q-card-main>
                <p>Most popular Mobile OS</p>
                <p class="text-faded">
                    From phones and watches to cars and TVs, customise your digital life with Android.
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
