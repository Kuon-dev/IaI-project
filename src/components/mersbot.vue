<template>
<div class="float-right fixed z-20 max-h-[50rem]">
    <div class="flex flex-row fixed top-[260px] right-0 mr-8 z-30" :class="{showButton: isBotHidden}">
        <h2 class="bg-black w-[23rem] text-2xl text-white text-center py-1" :class="{hidden: isBotHidden}">MersBot</h2>
        <button class="bg-sky-500 w-[5rem] text-2xl text-white text-center py-1" @click="isBotHidden = !isBotHidden">{{isBotHidden ? 'Show' : 'Hide'}}</button>
    </div>
    <div id="webchat" role="main" class="drop-shadow-xl" :class="{hidden: isBotHidden}"></div>
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
#webchat {
    position: fixed;
    height: calc(100% - 300px);
    top: 300px;
    width: 30rem;
    overflow: hidden;
}

.showButton {
    bottom: 0;
    top: auto;
}
</style>