<template>
  <div class="">
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
            <h2 class="text-3xl font-bold">BEST FOOD IN MERSING</h2>
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
</style>