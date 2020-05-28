<template>
    <div>Redirecting</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Linkedin extends Vue {
    mounted() {
        window.location.href = 'https://www.linkedin.com/in/kirillrakhman/'
    }
}
</script>