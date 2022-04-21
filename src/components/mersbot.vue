<template>
<div class="float-right fixed z-20 max-h-[50rem]">
    <div class="flex flex-row fixed top-[60px] right-0 mr-8 z-30 xl:top-[260px]" :class="{showButton: isBotHidden}">
        <h2 class="bg-gradient-to-r from-cyan-600 to-sky-500 w-[23rem] text-2xl text-white text-center py-1" :class="{hidden: isBotHidden}">MersBot</h2>
        <button class="bg-gradient-to-r from-sky-500 to-indigo-500 w-[5rem] text-2xl text-white text-center py-1" @click="isBotHidden = !isBotHidden">{{isBotHidden ? 'Show' : 'Hide'}}</button>
    </div>
    <div id="webchat" role="main" class="drop-shadow-xl" :class="{hidden: isBotHidden}"></div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isBotHidden: true,
        }
    },
    methods: {
        toggle: function(event) {
            event.target.classList.toggle('hidden');
        },
    },
    mounted(){
        const styleOptions = {
        hideUploadButton: true,
        botAvatarImage: 'https://cdn.discordapp.com/attachments/831057296813457418/964772179256422430/unknown.png',
        botAvatarInitials: 'MB',

        userAvatarInitials: 'You'
    };
    const styleSet = window.WebChat.createStyleSet({
        bubbleBackground: 'rgba(0, 0, 255, .1)',
        bubbleFromUserBackground: 'rgba(0, 255, 0, .1)',
        rootHeight: '100%',
        backgroundColor: '#cfffef'
    });
    styleSet.textContent = {
        ...styleSet.textContent,
        fontFamily: "'Helvetica', san-serif",
        fontSize: "1.3rem",
    };

    // Add your BOT ID below
    var BOT_ID = "28fd7d94-78ef-4c88-8fcd-72d7508bb021"; 

    var theURL = "https://powerva.microsoft.com/api/botmanagement/v1/directline/directlinetoken?botId=" + BOT_ID;

    const store = window.WebChat.createStore(
        {},
        ({ dispatch }) => next => action => {
            if (action.type === "DIRECT_LINE/CONNECT_FULFILLED") {
                dispatch({
                    meta: {
                        method: "keyboard",
                    },
                    payload: {
                        activity: {
                                channelData: {
                                    postBack: true,
                                },
                                //Web Chat will show the 'Greeting' System Topic message which has a trigger-phrase 'hello'
                                name: 'startConversation',
                                type: "event"
                            },
                    },
                    type: "DIRECT_LINE/POST_ACTIVITY",
                });
            }
            return next(action);
        }
    );
    fetch(theURL)
        .then(response => response.json())
        .then(conversationInfo => {
            window.WebChat.renderWebChat(
                {
                    directLine: window.WebChat.createDirectLine({
                        token: conversationInfo.token,
                    }),
                    styleSet,
                    store: store,
                    styleOptions: styleOptions
                },
                document.getElementById('webchat')
            );
        })
        .catch(err => console.error("An error occurred: " + err));
    
    }
}
</script>

<style>

#webchat {
    position: fixed;
    height: calc(100% - 100px);
    top: 100px;
    width: 30rem;
    overflow: hidden;
}
@media only screen and (min-width: 1280px) {
    #webchat {
    position: fixed;
    height: calc(100% - 300px);
    top: 300px;
    width: 30rem;
    overflow: hidden;
}
}

.showButton {
    bottom: 0;
    top: auto;
}
</style>