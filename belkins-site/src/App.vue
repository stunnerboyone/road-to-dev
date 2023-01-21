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
        <div  class="content">
            <Content />
        </div>
        <footer>
            <Footer />
        </footer>
    </div>
</template>
