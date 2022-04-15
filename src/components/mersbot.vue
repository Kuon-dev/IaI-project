<template>
<div class="float-right absolute bottom-1 right-1 z-50">
    <div class="flex flex-row">
        <h2 class="bg-black w-[32rem] text-2xl text-white text-center py-1" :class="{hidden: isBotHidden}">MersBot</h2>
        <button class="bg-sky-500 w-[6rem] text-2xl text-white text-center py-1" @click="isBotHidden = !isBotHidden">{{isBotHidden ? 'Show' : 'Hide'}}</button>
    </div>
    <div id="webchat" role="main" class="drop-shadow-xl border-slate-50" :class="{hidden: isBotHidden}"></div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isBotHidden: false,
        }
    },
    methods: {
        toggle: function(event) {
            event.target.classList.toggle('hidden');
        },
    }
}
</script>

<style>
</style>