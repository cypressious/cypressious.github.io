<template>
    <div class="tile is-ancestor">
        <div class="tile is-parent is-vertical">
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
                    <li>Spring Boot</li>
                    <li>Android</li>
                    <li>Gradle</li>
                    <li>IntelliJ IDEA</li>
                </ul>
            </div>

            <div class="tile is-child notification is-success">
                <div class="title level is-mobile">
                    <div class="level-left">
                        <div class="level-item">
                            <FontAwesomeIcon :icon="['fa', 'database']"/>
                        </div>
                        <div class="level-item">Databases</div>
                    </div>
                </div>
                <ul class="is-size-5">
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>Redis</li>
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
                    <li>Angular</li>
                    <li>React</li>
                    <li>WebStorm</li>
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
