<template>
    <div class="DirectionEngine">
        <div class="leftControl">
            <div class="leftControlBtn">
                <span
                    class="iconXX icon-arrow-"
                    style="transform: rotate(270deg);"
                ></span>
                <span
                    class="iconXX icon-arrow-"
                    style="transform: rotate(90deg);margin-left: 2rem;"
                ></span>
            </div>
        </div>
        <div class="rightControl">
            <div class="rightControlBtn">
                <span class="iconXX icon-arrow-"></span>
                <span
                    class="iconXX icon-arrow-"
                    style="transform: rotate(180deg);"
                ></span>
            </div>
        </div>
    </div>
</template>

<script setup>

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
            margin-bottom: 2rem;

            .iconXX {
                display: inline-block;
                font-size: 3rem;
                width: 77px;
                text-align: center;
            }
        }
    }

    .rightControl {
        transform-origin: 50% 50%;
        width: 50%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        margin-right: 5rem;

        .rightControlBtn {
            width: 77px;
            text-align: center;
            margin-bottom: 2rem;

            .iconXX {
                display: inline-block;
                font-size: 3rem;
                text-align: center;
            }
        }
    }
}
</style>