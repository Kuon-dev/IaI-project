<template>
  <div class="pgContainer">
    <mersbot/>
    <section>
        <div class="bg-cover pantai h-[45rem] divCenter flex-col">
            <!-- <h2 class="text-white divCenter text-8xl font-['Verdana'] z-20">Mersing</h2> -->
            <div class="pantaiChild z-10 w-full h-[45rem] divCenter flex-col gap-[8rem]">
                <img src="https://mersing.gov.my/wp-content/uploads/2020/01/Logo-White.png" class="h-[6rem] -mt-[20rem]">
                <h2 class="text-white divCenter text-8xl font-['Verdana'] z-20">Explore Mersing</h2>
            </div>
            <!-- <img src="https://rawaislandresort.com/sites/default/files/inline-images/about2_0.jpg" class="bg-cover w-full h-[45rem]"> -->
        </div>
    </section>

    <section class="mt-10">
        <div class="divCenter">
            <h2 class="text-4xl font-bold py-2">TOURISM IN MERSING</h2>
        </div>
        <div>
            <div class="flex flex-row gap-8 divCenter">
                <div class="h-20 w-[20rem]">
                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/dd/44/ab/grilled-sambal-sotong.jpg">
                    <p class="text-center pt-1 text-gray-500">Food</p>
                </div>
                <div class="h-20 w-[20rem]">
                    <img src="https://apicms.thestar.com.my/uploads/images/2020/07/11/753407.jpg">
                    <p class="text-center pt-1 text-gray-500">Historical</p>
                </div>
                <div class="h-20 w-[18.8rem]">
                    <img src="https://www.theislanddrum.com/wp-content/uploads/2016/02/nightmarket-vendor-e1456737447549.jpg">
                    <p class="text-center pt-1 text-gray-500">Local markets</p>
                </div>
            </div>
        </div>
    </section>
    <section class="mt-[10rem] xl:px-[20rem] px-20 flex flex-col gap-8 py-20">
        <div>
            <h2 class="text-3xl font-bold">Mersing Overview</h2>
            <p class="text-xl">
            Mersing is a town in Johor, Malaysia. It remains as a fishing village despite the developing city centre of Johor Bahru. 
            It is the main departure spot for many islands. 
            <br>
            <br>
            One can access various islands from Mersing jetty such as the Rawa Island, Dayang Island, Aur Island, Pemanggil Island and more. 
            As it is a fishing village, purchasing seafood there is the best thing to do. You can get fresh seafood with affordable prices. 
            There are also cafes and fast food chains around apart from the stalls of local delicacies. 
            The top Johor hotels in Mersing are the Sea Gypsy Village Resort and Hotel Timotel.
            <br>
            <br>
            There are quite a few attractions nearby. 
            If you are a nature - lover, do spend some time stopping by the national park in Johor, 
            namely the Endau Rompin National Park with fascinating flora and fauna there.
            Pulau Hujong is too, near to Mersing town with approximately 14km away. 
            It is the ideal spot for relaxation session.</p>
        </div>
        <div>
            <h2 class="text-3xl font-bold">Location</h2>
            <p class="text-xl">
            Mersing town is situated on the east coast of Johor, Peninsular Malaysia. 
            It is approximately 136km from the city centre of Johor Bahru. 
            It acts as the main spot of departure of multiple islands on the South China Sea.
            </p>
        </div>  
    </section>
  </div>
</template>

<script>
import mersbot from "../components/mersbot.vue"
export default {
    components: {
        mersbot,
    }
}
</script>
<style>
.pantai {
    background-image: url("https://rawaislandresort.com/sites/default/files/inline-images/about2_0.jpg");
}

.pantaiChild {
    background-color: rgba(0, 0, 0, 0.367);
}

.divCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (min-width: 1920px) {
    .pgContainer {
        padding: 0 10rem;
    }
}
</style>