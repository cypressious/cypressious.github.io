<template>
    <div>Redirecting</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LinkedIn extends Vue {
    mounted() {
        window.location.href = 'https://www.xing.com/profile/Kirill_Rakhman/cv'
    }
}
</script>