<style scoped>
.icon {
    margin-left: .25rem;
    margin-right: .25rem;
}
</style>

<template>
    <div class="tile is-ancestor">
        <div class="tile is-parent">
            <div class="tile is-child notification is-link">
                <div class="title level is-mobile">
                    <div class="level-left">
                        <div class="level-item">
                            <FontAwesomeIcon :icon="['fab', 'java']"/>
                        </div>
                        <div class="level-item">JVM &</div>
                        <div class="level-item">
                            <FontAwesomeIcon :icon="['fab', 'android']"/>
                        </div>
                        <div class="level-item">Android</div>
                    </div>
                </div>
                <ul class="is-size-5">
                    <li>Java</li>
                    <li>Kotlin</li>
                    <li>Gradle</li>
                    <li>RxJava</li>
                    <li>IntelliJ IDEA & Android Studio</li>
                </ul>
            </div>
        </div>

        <div class="tile is-parent is-vertical">
            <div class="tile is-child notification is-danger">
                <div class="title level is-mobile">
                    <div class="level-left">
                        <div class="level-item">
                            <FontAwesomeIcon :icon="['fab', 'microsoft']"/>
                        </div>
                        <div class="level-item">.NET</div>
                    </div>
                </div>
                <ul class="is-size-5">
                    <li>C#</li>
                    <li>ASP.NET Core</li>
                    <li>JetBrains Rider</li>
                </ul>
            </div>

            <div class="tile is-child notification is-warning">
                <div class="title level is-mobile">
                    <div class="level-left">
                        <div class="level-item">
                            <FontAwesomeIcon :icon="['fab', 'html5']"/>
                        </div>
                        <div class="level-item">Web</div>
                    </div>
                </div>
                <ul class="is-size-5">
                    <li>Typescript</li>
                    <li>Vue.js</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Technologies'
};
</script>
