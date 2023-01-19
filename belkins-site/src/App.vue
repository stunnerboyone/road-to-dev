<script>
    import HeaderDesktop from './components/HeaderDesktop.vue';
</script>

<template>
    <div class="header">
        <div class = "content">
            <div class = "logo" >
                <img src="./ui/Group86.png" alt="logo" weight = 90 height = 32>
            </div>
            <nav class = "desktop-nav">
                <div class = "desktop-item">Solutions</div>
                <div class = "desktop-item">How it works</div>
                <div class = "desktop-item">Resources</div>
                <div class = "desktop-item">More</div>
                <a href="#">Pricing</a>
            </nav>
            <div class = "buttons">
                <button class="contact_us_button">Contact Us</button>
                <button class="book_a_call">Book a Call</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .header{
        background-color: pink;
        display: flex;
        padding: 3px, 2px, 2px, 3px;
        height: 72px;
        button{
            color: aqua;
        }
    }
    .content{
        display: flex;
        margin: 16px;
        margin-left: 64px   ;
    }
    .logo{
        display: flex;
        margin: 2;
    }
    .desktop-nav{
        display: flex;
        margin: 2px;

    }
</style>

