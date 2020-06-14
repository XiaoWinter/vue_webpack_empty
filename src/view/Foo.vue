<template>
  <div>
    <div>1.测试textcont的插值表达式</div>
    <div>2.测试属性值的插值表达式</div>
    <div :data-i="moban">
      {{moban}}
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      moban:"<%= 133 %>"
    }
  }
}
</script>

<style>

</style>