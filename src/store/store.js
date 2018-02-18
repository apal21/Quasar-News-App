import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    topics: [{
      title: 'JavaScript',
      subtitle: 'Dynamic Frontend',
      description: 'JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn.'
    }, {
      title: 'PHP',
      subtitle: 'Server King',
      description: 'PHP is a server scripting language, and a powerful tool for making dynamic web pages.'
    }, {
      title: 'Laravel',
      subtitle: 'Best in PHP',
      description: 'Love beautiful code? We do too. The PHP Framework For Web Artisans.'
    }, {
      title: 'Android',
      subtitle: 'Most popular Mobile OS',
      description: 'From phones and watches to cars and TVs, customise your digital life with Android.'
    }],
    news: [{
      title: 'Hello World in Android',
      description: 'How to write Hello World in Android Studio',
      topics: ['Android']
    }, {
      title: 'Make Authentication in Laravel',
      description: 'How to create Auth in Laravel 5.6 using Command Line Interface',
      topics: ['Laravel']
    }, {
      title: 'Store Data in MySQL',
      description: 'Store data in local MySQL database using HTML forms and PHP and Laravel',
      topics: ['PHP', 'Laravel']
    }, {
      title: 'Change CSS class onclick',
      description: 'Change CSS class of an element using JavaScript',
      topics: ['JavaScript']
    }]
  },
  getters,
  mutations,
  actions
})
