<template>
    <div>Redirecting</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Twitter extends Vue {
    mounted() {
        window.location.href = 'https://twitter.com/Cypressious/'
    }
}
</script>