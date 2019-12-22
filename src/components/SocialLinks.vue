<template>
    <div>
        <SocialLink icon="github" title="Github" href="https://github.com/cypressious/"/>
        <SocialLink icon="stack-overflow" title="Stack Overflow"
                    href="https://stackoverflow.com/users/615306/kirill-rakhman/"/>
        <SocialLink icon="twitter" title="Twitter" href="https://twitter.com/Cypressious"/>
        <SocialLink icon="linkedin" title="LinkedIn" href="https://www.linkedin.com/in/kirillrakhman"/>
        <SocialLink icon="xing" title="Xing" href="https://www.xing.com/profile/Kirill_Rakhman"/>
    </div>
</template>
<script>
import SocialLink from './SocialLink';

export default {
    name: 'SocialLinks',
    components: { SocialLink }
};
</script>