<template>
  <div class="test">
    <div class="father" @click="father">
      <div @click.stop="son" class="son"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcomeIndex',
  methods: {
    father () {
      alert('father')
    },
    son () {
      alert('son')
    }
  }
}
</script>

<style lang="less" scoped>
.father {
  width: 100px;
  height: 100px;
  background: #ccc;
  position: relative;

  .son {
    width: 60px;
    height: 60px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
