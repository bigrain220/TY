<template>
     <div class="cell">
      <div class="cell-title">
        <span>{{title}}</span>
      </div>
      <div class="cell-value">
        <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang='scss' scoped>
.cell {
  position: relative;
  display: flex;
  width: 100%;
  padding: 8px 15px 8px 25px;
  line-height: 24px;
  overflow: hidden;
  color: #323233;
  font-size: 14px;
  background-color: #fff;
  .cell-title {
    font-weight: 500;
    flex: 1;
  }
  .cell-value{
    text-align: right;
  }
  &:before {
    top: 50%;
    margin-top: -8px;
    position: absolute;
    content: "";
    width: 2px;
    background: #2482FC;
    left: 15px;
    height: 14px;
  }
}
</style>
