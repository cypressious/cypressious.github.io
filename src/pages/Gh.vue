<template>
    <div>Redirecting</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Gh extends Vue {
    mounted() {
        window.location.href = 'https://github.com/cypressious/'
    }
}
</script>