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
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=Kaushan+Script&family=Montserrat:wght@400;700&family=Roboto&display=swap');
    $orange: #FF5E00;
    $white: #FFFFFF;
    $typographyBody: #3D3D3D;
    .header{
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        padding: 16px 64px;
        font-size: 100%;
        vertical-align: baseline;
    }
    .content{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        max-width: 1440px;
        height: 72px;
        margin: 0 auto;
        padding: 0;
    }
    .logo{
    }
    .menu{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
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


</style>
