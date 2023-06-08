<template>
    <div class="login">
        <loginComp></loginComp>
    </div>
</template>
  
<script>
    import loginComp from '@/components/loginComp.vue'
    
    export default {
        name: 'LoginView',
        components: {
            loginComp
        },
    }
</script>