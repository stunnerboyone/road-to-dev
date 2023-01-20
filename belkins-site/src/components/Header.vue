<template>
    <div class="header">
        <div clss = "content">
            <div class = "logo">
                <img src="/src/ui/Group86.png" alt="logo" weight = "90" height = "32">
            </div>
            <nav class = "menu">
                <div class = "nav-item">Solutions <img src="/src/ui/ArrowDown.png"></div>
                <div class = "nav-item">How it works <img src="/src/ui/ArrowDown.png"></div>
                <div class = "nav-item">Resources <img src="src/ui/ArrowDown.png"></div>
                <div class = "nav-item">More <img src="/src/ui/ArrowDown.png"></div>
                <div class = "nav-item"><a href="#">Pricing</a></div>
            </nav>
            <div></div>
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
    $typographyBody: #3D3D3D;
    .header{
        position: fixed;
        display: grid;
        gap: 25px;
        justify-content: normal;
        grid-column-end: auto;
        box-sizing: border-box;
        padding: 16px 64px;
        font-size: 100%;
        vertical-align: baseline;
    }
    .content{
        display: flex;
        align-items: center;
        max-width: 1440px;
        height: 72px;
        margin: 0 auto;
        padding: 0;
    }
    .logo{
        display: flex;
    }
    .menu{
        display: flex;
        margin-left: 20px;
        align-items: center;
        vertical-align: baseline;
        .nav-item{
            margin-left: 20px;
            color: $typographyBody;
            font-size: 100%;
        }
        a{
            color: $typographyBody;
            font-size: 100%;
        }
    }

    .buttons{
        display: flex;
        float: right;
        .button{
            background-color: $white;
            color: $typographyBody;
            font-size: 100%;
        }
        .button2{
            background-color: $orange;
            color: $white;
            font-size: 100%;
        }
    }

    @media (max-width: 1280px){

    }
    @media (max-width: 1000px){

    }
</style>
