<template>
  <div class="h-screen overflow-hidden flex w-screen items-center">
    <div class="text-lare text-red-500 mx-auto">
      Translation: "{{ t('welcome') }}"
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n({ useScope: 'global' })
</script>
