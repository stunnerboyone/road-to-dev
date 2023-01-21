<template>
    <div class="header-content">
            <nav class = "logo-and-menu">
                <div class="header-logo">
                    <img src="./ui/Group86.png" alt="logo" >
                </div>
                <div class = "menu">
                    <div class = "nav-item">What We Do <img src="./ui/ArrowDown.png"></div>
                    <div class = "nav-item">Customer Success <img src="./ui/ArrowDown.png"></div>
                    <div class = "nav-item">Resources <img src="./ui/ArrowDown.png"></div>
                    <div class = "nav-item">Company <img src="./ui/ArrowDown.png"></div>
                    <div class = "nav-item"><a href="#">Pricing</a></div>
                </div>
            </nav>
            <div class = "buttons">
                <button class="button1">Contact Us</button>
                <button class="button2">Book a Call</button>
            </div>
        </div>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=Kaushan+Script&family=Montserrat:wght@400;700&family=Roboto&display=swap');
    $orange: #FF5E00;
    $white: #FFFFFF;
    $typographyBody: #3D3D3D;
    .header-content{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 263;
    }
    .logo-and-menu{
        display: flex;
        flex-direction: row;
        padding: 0px;
        align-items: center;
        gap: 40px;
        .header-logo{
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 90px;
            height: 32px;
        }
        .menu{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0px;
            gap: 24px;
        }
        .nav-item{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0px;
            gap: 4px;
            margin-left: 20px;
            color: $typographyBody;
            font-size: 100%;
        }
        a{
            color: $typographyBody;
            font-size: 100%;
        }
        .buttons{
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;
                padding: 0px;
                gap: 16px;
            .button{
                display: flex;
            }
            .button2{
                background-color: $orange;
                color: $white;
                font-size: 100%;
            }
    }
}
</style>