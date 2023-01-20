<script>
    import Header from './components/Header.vue';
    import Content from './components/Content.vue';
    import Footer from './components/Footer.vue';

    export default{
        components:{
            Header,
            Content,
            Footer,
        }
    }
</script>

<template>
    <div>
        <header>
            <Header />
        </header>
        <div>
            <Content />
        </div>
        <div>
            <Footer />
        </div>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=Kaushan+Script&family=Montserrat:wght@400;700&family=Roboto&display=swap');
    
    *{
        font-family: inter;
    }
    
</style>