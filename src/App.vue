<template>
  <div class="flex justify-center items-center flex-col ban">
    <div class="bg-orange-200 mt-14 m-8 rounded-3xl">
      <p class="text-2xl text-center p-4 font-serif font-bold">Recettes Espagnoles !</p>
    </div>

    <div class="flex justify-center mt-4">
      <button 
        @click="showTortilla" 
        :class="['px-4 py-2 rounded-t-3xl', activeRecipe === 'tortilla' ? 'bg-orange-200 text-black' : 'bg-orange-100 text-black']"
      >
        Tortilla
      </button>
      <button 
        @click="showPaella" 
        :class="['px-4 py-2 rounded-t-3xl', activeRecipe === 'paella' ? 'bg-orange-200 text-black' : 'bg-orange-100 text-black']"
      >
        Paella
      </button>
      <button 
        @click="showGaspacho" 
        :class="['px-4 py-2 rounded-t-3xl', activeRecipe === 'gaspacho' ? 'bg-orange-200 text-black' : 'bg-orange-100 text-black']"
      >
        Gaspacho
      </button>
      <button 
        @click="showFabada" 
        :class="['px-4 py-2 rounded-t-3xl', activeRecipe === 'fabada' ? 'bg-orange-200 text-black' : 'bg-orange-100 text-black']"
      >
        Fabada
      </button>
      <button 
        @click="showCremaCatalana" 
        :class="['px-4 py-2 rounded-t-3xl', activeRecipe === 'cremaCatalana' ? 'bg-orange-200 text-black' : 'bg-orange-100 text-black']"
      >
        Crema Catalana
      </button>
    </div>

    <div class="taille">
      <Tortilla v-if="activeRecipe === 'tortilla'" />
      <Paella v-if="activeRecipe === 'paella'" />
      <Gaspacho v-if="activeRecipe === 'gaspacho'" />
      <Fabada v-if="activeRecipe === 'fabada'" />
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
import Fabada from './components/fabada.vue'
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
const showFabada = () => {
  activeRecipe.value = 'fabada'
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
}
.taille {
  width: 400px;
  height: 1700px;
}

@media screen and (min-width: 990px) {
  .taille {
    width: 1000px;
    height: 1100px;
  }
}
</style>