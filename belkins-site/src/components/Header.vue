<template>
    <div class="header">
        <div class = "content">
            <div class = "logo" >
                <img src="/src/ui/Group86.png" alt="logo" weight = "85" height = "27">
            </div>
            <nav class = "nav">
                <div class = "nav-item">Solutions <img src="/Projects/road-to-dev/belkins-site/src/ui/ArrowDown.png"></div>
                <div class = "nav-item">How it works <img src="/Projects/road-to-dev/belkins-site/src/ui/ArrowDown.png"></div>
                <div class = "nav-item">Resources <img src="/Projects/road-to-dev/belkins-site/src/ui/ArrowDown.png"></div>
                <div class = "nav-item">More <img src="/Projects/road-to-dev/belkins-site/src/ui/ArrowDown.png" weight = "2" height = "2"></div>
                <div class = "nav-item"><a href="#">Pricing</a></div>
            </nav>
            <div class = "buttons">
                <button class="button1">Contact Us</button>
                <button class="button2">Book a Call</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    $orange: #FF5E00;
    $white: #FFFFFF;

    .header{
        max-width: 1440px;
        min-width: 360px;
        background-color: $white;
        display: flex;
        height: 72px;
        place-items: center;
    }
    .content{
        display: flex;
        margin: 16px;
        margin-left: 64px;
    }
    
    .nav{
        display: flex;
        margin-left: 20px;
        place-items: center;
        .nav-item{
            margin-left: 20px;
            
        }
    }

    .buttons{
        display: flex;
        float: right;
        margin-left: 50px;
        .button2{
            background-color: $orange;
            color: $white;
        }
    }


    @media (max-width: 1280px){

    }
    @media (max-width: 1000px){

    }
</style>
