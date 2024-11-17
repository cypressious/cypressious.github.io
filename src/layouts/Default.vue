<style scoped lang="scss">
@use '~bulma/sass/utilities/initial-variables';

.main-content {
    padding-top: 2rem;
    padding-bottom: 2rem;
}

.container{
    max-width: 60em;
}

@media (max-width: initial-variables.$desktop) {
    .main-content {
        padding-left: .5rem;
        padding-right: .5rem;
    }
}
</style>

<template>
    <div class="container">
        <nav class="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
            <div class="navbar-container container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        <strong>{{ $static.metadata.siteName }}</strong>
                    </a>

                    <a role="button" class="navbar-burger burger" :class="{'is-active': isBurgerToggled }"
                       aria-label="menu" aria-expanded="false" @click="isBurgerToggled = !isBurgerToggled">
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                    </a>
                </div>

                <div class="navbar-menu" :class="{'is-active': isBurgerToggled }">
                    <div class="navbar-start">
                        <g-link class="navbar-item" to="/cv/">CV</g-link>
                        <g-link class="navbar-item" to="/publications/">Publications</g-link>
                        <g-link class="navbar-item" to="/talks/">Talks</g-link>
                        <g-link class="navbar-item" to="/blog/">Blog</g-link>
                    </div>
                </div>
            </div>
        </nav>

        <div class="container main-content">
            <slot/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    metaInfo: {
        bodyAttrs: {
            class: 'has-navbar-fixed-top'
        }
    }
})
export default class Default extends Vue {
    isBurgerToggled = false;
}
</script>

<static-query>
query {
    metadata {
        siteName
    }
}
</static-query>
