<template>
  <div class="flex justify-center items-center flex-col ban">
    <div class="bg-orange-200 mt-14 m-8 rounded-3xl">
      <p class="text-2xl text-center p-4 font-serif font-bold">Recettes Espagnoles !</p>
    </div>

    <div class="flex justify-center mt-4">
      <button 
        @click="showTortilla" 
        :class="['rounded-t-3xl bouton', activeRecipe === 'tortilla' ? 'bg-orange-200 text-black' : 'bg-orange-100 text-black']"
      >
        Tortilla
      </button>
      <button 
        @click="showPaella" 
        :class="['rounded-t-3xl bouton', activeRecipe === 'paella' ? 'bg-orange-200 text-black' : 'bg-orange-100 text-black']"
      >
        Paella
      </button>
      <button 
        @click="showGaspacho" 
        :class="['rounded-t-3xl bouton', activeRecipe === 'gaspacho' ? 'bg-orange-200 text-black' : 'bg-orange-100 text-black']"
      >
        Gaspacho
      </button>
      <button 
        @click="showCremaCatalana" 
        :class="['rounded-t-3xl bouton', activeRecipe === 'cremaCatalana' ? 'bg-orange-200 text-black' : 'bg-orange-100 text-black']"
      >
        Crema Catalana
      </button>
    </div>

    <div class="taille">
      <Tortilla v-if="activeRecipe === 'tortilla'" />
      <Paella v-if="activeRecipe === 'paella'" />
      <Gaspacho v-if="activeRecipe === 'gaspacho'" />
      <CremaCatalana v-if="activeRecipe === 'cremaCatalana'" />
    </div>
  </div>

  <div class="flex absolute right-0 top-0 my-2 mx-2 gap-2 bg-orange-200 px-4 py-1 rounded-3xl">
    <button @click="changeLanguage('fr')" class="flex justify-center items-center gap-1">
      <CoFlagFr />FR
    </button>
    <button @click="changeLanguage('en')" class="flex justify-center items-center gap-1">
      <CoFlagGb />EN
    </button>
    <button @click="changeLanguage('es')" class="flex justify-center items-center gap-1">
      <img src="./assets/img/spain.png"/>ES
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Tortilla from './components/tortilla.vue'
import { CoFlagFr, CoFlagGb } from '@kalimahapps/vue-icons'
import Paella from './components/paella.vue'
import Gaspacho from './components/gaspacho.vue'
import CremaCatalana from './components/cremaCatalana.vue'

const { locale } = useI18n()
const activeRecipe = ref('tortilla')

const changeLanguage = (lang) => {
  locale.value = lang
}

const showTortilla = () => {
  activeRecipe.value = 'tortilla'
}
const showPaella = () => {
  activeRecipe.value = 'paella'
}
const showGaspacho = () => {
  activeRecipe.value = 'gaspacho'
}
const showCremaCatalana = () => {
  activeRecipe.value = 'cremaCatalana'
}
</script>

<style>
.ban {
  background-image: url('../src/assets/img/ban.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}
.taille {
  width: 370px;
  min-height: 100vh;
}
.bouton {
  padding: 4px 6px;
  font-size: 14px;
}

@media screen and (min-width: 990px) {
  .taille {
    width: 1000px;
    height: 1100px;
  }
  .bouton {
    padding: 12px 32px;
    font-size: 16px;
  }
}
</style>