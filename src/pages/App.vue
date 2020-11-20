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
    width: 640px;
    height: 640px;
    background: url('../img/a.jpg?__sprite') no-repeat;
    color: aqua;
}
.msg2 {
    width: 246px;
    height: 346px;
    background: url('../img/b.jpg?__sprite') no-repeat;
}
</style>