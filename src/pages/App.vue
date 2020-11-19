<template>
    <div class="msg">{{msg}}</div>
    
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
    background: url('../img/a.jpg') no-repeat;
    background-size: contain;
    color: aqua;
}
</style>