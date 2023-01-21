<template>
    <div class = "footer">
        <div class="content">
            <div class="info">
                <div class="logo">
                    <img src="/src/ui/Group86.png" alt="logo" weight = "90" height = "32">
                </div>
                <div class = "contacts">
                    <a href="tel:+1 302-803-5506" class="link">+1 302-803-5506</a>
                    <a href="mailto:sales@belkins.io" class="link">sales@belkins.io</a>
                    <a href="mailto:press@belkins.io" class="link">press@belkins.io</a>
                </div>
                <div class="partners">
                    <img src="/src/ui/google-partner-log.png" alt="google-partner-log.png">
                </div>
            </div>
            <div class="navigation">
                <div class = "solutions">
                        <p>Solutions</p>
                        <a href="#" >Appointment Setting</a>
                        <a href="#" >Inbound Appointment Setting</a>
                        <a href="#" >Lead Research</a>
                        <a href="#" >The LinkedIn Influencer Program</a>
                </div>
                <div class = "How it works">
                        <p>How it works</p>
                        <a href="#" >Belkins Approach</a>
                        <a href="#" >Our Account Manager</a>
                        <a href="#" >Our Template Writer</a>
                        <a href="#" >Our Lead Research Specialist</a>
                        <a href="#" >Our SDR</a>
                        <a href="#" >Our Email Deliverability Experts</a>
                        <a href="#" >Industries</a>
                        <a href="#" >Video Testimonials</a>
                </div>
                <div class = "company">
                    <p>Company</p>
                    <a href="#" >About us</a>
                    <a href="#" >Carrers</a>
                    <a href="#" >Pricing</a>
                    <a href="#" >Case studies</a>
                    <a href="#" >Sales tools</a>
                    <a href="#" >Contact us</a>
                </div>
                <div class = "resourses">
                    <p>Resourses</p>
                    <a href="#">Blog</a>
                    <a href="#">How to Guides</a>
                    <a href="#">Belins Growth Podcast</a>
                    <a href="#">Help Center</a>
                </div>
                <div class = "products">
                    <p>Products</p>
                    <a href="#">Folderly</a>
                    <a href="#">Leadsforce</a>
                    <a href="#">Wordstir</a>
                </div>
            </div>
        </div>

        <div class="bottom">
            <div class = "social">
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
            </div>
            <div class = "copyright">
                <p>Copyright Belkins Inc 2022. All right reserved</p>
            </div>
            <div class = "policy">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=Kaushan+Script&family=Montserrat:wght@400;700&family=Roboto&display=swap');
    $typographyBody: #3D3D3D;
    $typographyGrey: #B8B8B8;
    $white: #FFFFFF;

    .footer{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-width: 1440px;
        height: 552px;
        padding:56px 0;
        font-family: 'Inter';
        font-style: normal;
    }
        .info{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-width: 224px;
            background-color: pink;
            .logo{
                
            }
            .contacts{
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                background-color: aqua;
            }
        }
        .navigation{
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            justify-content: space-between;
            background-color: antiquewhite;
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            .solutions{
                display: flex;
                flex-direction: column;
                background-color: burlywood;
            }
        }
        .bottom{
            display: flex;
            justify-content: flex-end;
            justify-content: space-between;
            background-color: chartreuse;
        }
    
</style>