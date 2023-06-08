<template>
    <div class="signupview">
        <signupComp> </signupComp>
    </div>
</template>
  
<script>
    import signupComp from '@/components/signupComp.vue'
    
    export default {
        name: 'signupView',
        components: {
            signupComp
        },
    }
</script>