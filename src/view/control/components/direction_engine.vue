<template>
    <div class="DirectionEngine">
        <div class="leftControl">
            <div class="leftControlBtn">
                <span
                    class="iconXX icon-arrow-"
                    style="transform: rotate(270deg);"
                    @touchstart="activeBtn($event, '/right')"
                    @touchend="entBtn('leftControlBtn')"
                ></span>
                <span
                    class="iconXX icon-arrow-"
                    style="transform: rotate(90deg);margin-left: 2rem;"
                    @touchstart="activeBtn($event, '/left')"
                    @touchend="entBtn('leftControlBtn')"
                ></span>
            </div>
        </div>
        <div class="rightControl">
            <div class="rightControlBtn">
                <span
                    class="iconXX icon-arrow-"
                    @touchstart="activeBtn($event, '/forward')"
                    @touchend="entBtn('rightControlBtn')"
                ></span>
                <span
                    class="iconXX icon-arrow-"
                    style="transform: rotate(180deg);"
                    @touchstart="activeBtn($event, '/back')"
                    @touchend="entBtn('rightControlBtn')"
                ></span>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useRoute} from 'vue-router';
import axios from "axios";
let route = useRoute();
const url = route.query.address;

// 手指按下
const activeBtn = (e, type) => {
    e.currentTarget.classList.add('active');
    axios({ url: url + type, method: 'get' });
}
// 手指抬起
const entBtn = (boxClass = 'DirectionEngine') => {
    let box = document.querySelector(`.${boxClass}`);
    let active = box.querySelector('.active');
    if (active) active.classList.remove('active');

    if(boxClass== 'rightControlBtn')axios({ url: url + '/stop', method: 'get' });
    else if(boxClass== 'leftControlBtn')axios({ url: url + '/normal', method: 'get' });
}

</script>

<style lang="scss" scoped>
.DirectionEngine {
    width: 100%;
    height: 100%;
    display: flex;

    .leftControl {
        width: 50%;
        padding-top: 35px;
        display: flex;
        align-items: flex-end;

        .leftControlBtn {
            width: 100%;
            padding-left: 2rem;
            margin-bottom: 3.5rem;

            .iconXX {
                display: inline-block;
                font-size: 4.5rem;
                width: 77px;
                text-align: center;
            }

            .iconXX:active {
                transform: scale(1.2);
            }
        }
    }

    .rightControl {
        transform-origin: 50% 50%;
        width: 50%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        margin-right: 6.5rem;

        .rightControlBtn {
            width: 77px;
            text-align: center;
            margin-bottom: 3.5rem;

            .iconXX {
                width: 77px;
                display: inline-block;
                font-size: 4.5rem;
                text-align: center;
            }
        }
    }

    .active {
        background-color: skyblue;
        // transform: scale(1.2);
        border-radius: 1rem;
    }
}
</style>