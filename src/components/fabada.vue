<template>
    <div class="flex justify-center items-center flex-col bg-orange-200 text-black rounded-3xl mx-6 mb-6 p-8">
      <p class="mb-1 font-bold text-3xl">{{ t('fabada.titre') }}</p>
      <p class="italic">{{ t('fabada.servir') }}</p>
  
      <ul class="list-disc text-left flex flex-col justify-center mt-5">
        <li>{{ t('fabada.ingredients[0]') }}</li>
        <li>{{ t('fabada.ingredients[1]') }}</li>
        <li>{{ t('fabada.ingredients[2]') }}</li>
        <li>{{ t('fabada.ingredients[3]') }}</li>
      </ul>
  
      <div class="flex flex-col gap-4 text-left my-5 bg-orange-100 rounded-3xl p-4">
        <div class="flex gap-1">
          <p class="font-bold">{{ t('fabada.instructions[0].etape') }}.</p>
          <p>{{ t('fabada.instructions[0].description') }}</p>
        </div>
        <div class="flex gap-1">
          <p class="font-bold">{{ t('fabada.instructions[1].etape') }}.</p>
          <p>{{ t('fabada.instructions[1].description') }}</p>
        </div>
        <div class="flex gap-1">
          <p class="font-bold">{{ t('fabada.instructions[2].etape') }}.</p>
          <p>{{ t('fabada.instructions[2].description') }}</p>
        </div>
        <div class="flex gap-1">
          <p class="font-bold">{{ t('fabada.instructions[3].etape') }}.</p>
          <p>{{ t('fabada.instructions[3].description') }}</p>
        </div>
        <div class="flex gap-1">
          <p class="font-bold">{{ t('fabada.instructions[4].etape') }}.</p>
          <p>{{ t('fabada.instructions[4].description') }}</p>
        </div>
      </div>

      <img src="../assets/img/fabada.jpg" class="w-72 rounded-lg">
    
    </div>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n'
  
  const { t } = useI18n()
  </script>