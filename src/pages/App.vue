<template>
    <div>
        <div class="msg">{{msg}}</div>
        <div class="msg2"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: 'hhhh'
        }
    }
}
</script>
<style lang="less" scoped>
.msg {
    width: 100px;
    height: 100px;
    background: url('../img/a.jpg?__sprite') no-repeat;
    background-size: contain;
    color: aqua;
}
.msg2 {
    width: 100px;
    height: 100px;
    background: url('../img/b.jpg?__sprite') no-repeat;
    background-size: contain;
}
</style>