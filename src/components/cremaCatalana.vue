<template>
    <div class="flex justify-center items-center flex-col bg-orange-200 text-black rounded-3xl mx-6 mb-6 p-8">
      <p class="mb-1 font-bold text-3xl">{{ t('Crema.titre') }}</p>
      <p class="italic">{{ t('Crema.servir') }}</p>
  
      <ul class="list-disc text-left flex flex-col justify-center mt-5">
        <li>{{ t('Crema.ingredients[0]') }}</li>
        <li>{{ t('Crema.ingredients[1]') }}</li>
        <li>{{ t('Crema.ingredients[2]') }}</li>
        <li>{{ t('Crema.ingredients[3]') }}</li>
      </ul>
  
      <div class="flex flex-col gap-4 text-left my-5 bg-orange-100 rounded-3xl p-4">
        <div class="flex gap-1">
          <p class="font-bold">{{ t('Crema.instructions[0].etape') }}.</p>
          <p>{{ t('Crema.instructions[0].description') }}</p>
        </div>
        <div class="flex gap-1">
          <p class="font-bold">{{ t('Crema.instructions[1].etape') }}.</p>
          <p>{{ t('Crema.instructions[1].description') }}</p>
        </div>
        <div class="flex gap-1">
          <p class="font-bold">{{ t('Crema.instructions[2].etape') }}.</p>
          <p>{{ t('Crema.instructions[2].description') }}</p>
        </div>
        <div class="flex gap-1">
          <p class="font-bold">{{ t('Crema.instructions[3].etape') }}.</p>
          <p>{{ t('Crema.instructions[3].description') }}</p>
        </div>
        <div class="flex gap-1">
          <p class="font-bold">{{ t('Crema.instructions[4].etape') }}.</p>
          <p>{{ t('Crema.instructions[4].description') }}</p>
        </div>
        <div class="flex gap-1">
          <p class="font-bold">{{ t('Crema.instructions[5].etape') }}.</p>
          <p>{{ t('Crema.instructions[5].description') }}</p>
        </div>
      </div>

      <img src="../assets/img/crema.jpeg" class="w-72 rounded-lg">
    
    </div>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n'
  
  const { t } = useI18n()
  </script>