<template lang="pug">
v-container.fill-height
    v-responsive.align-center.text-center.fill-height
        v-img(height="300" src="@/assets/logo.svg")
        span.text-body-2.font-weight-light.mb-n1 Welcome to
        h1.pb-10.text-h2.font-weight-bold Hotbox
        v-row.d-flex.align-center.justify-center
            v-col(cols="auto")
                v-btn(href="https://vuetifyjs.com/components/all/" min-width="164" rel="noopener noreferrer" target="_blank" variant="text")
                    v-icon(icon="mdi-cog" size="large" start="")
                    | Settings
            v-col(cols="auto")
                v-btn(color="primary" href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides" min-width="228" rel="noopener noreferrer" size="x-large" target="_blank" variant="flat")
                    v-icon(icon="mdi-radiator" size="large" start="")
                    | Start Roasting
            v-col(cols="auto")
                v-btn(to='/debugger' color="secondary" min-width="228" size="x-large" variant="text")
                    v-icon(icon="mdi-developer-board" size="large" start="")
                    | Debugger
</template>

<script setup>
    //
</script>

