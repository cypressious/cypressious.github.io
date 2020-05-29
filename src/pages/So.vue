<template>
    <div>Redirecting</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class So extends Vue {
    mounted() {
        window.location.href = 'https://stackoverflow.com/users/615306/kirill-rakhman/'
    }
}
</script>