---
title: 'defineProps vs defineEmits'
date: '2020-01-02'
---

## 最清晰、最常用、最推荐（TS 泛型写法）
```js
<script setup lang="ts">
const props = defineProps<{
  title: string
  count: number
}>()
</script>
```

💡 好处：

自动类型提示

父组件传错类型会直接报错



## 可选 + 默认值

```js
const props = withDefaults(
  defineProps<{
    customBack?: string
    title?: string
    border?: boolean
    LeftSlot?: boolean
    themesColor?: string
    goToApp?: boolean
    initTemplateData?: () => void
    saveExport?: () => void
  }>(),
  {
    title: '模板编辑器',
    initTemplateData: () => { },
    saveExport: () => { },
  }
)
```
“最佳实践”？
1、TS 能 完整校验函数签名
2、参数、返回值一清二楚
3、IDE 自动提示

```js
const emit = defineEmits(['goBack'])
```

### 为什么还要用 defineEmits？

这是很多人真正迷糊的地方，我直接给你判断标准。

✅ 什么时候“传函数”更合适？

工具型 / 控制型组件

👉 子组件 需要调用父组件逻辑

组件、表、高阶组件（封装逻辑）


✅ 什么时候必须用 emits？

状态变化 / 行为通知

👉 子组件只关心： “我关了，你爱怎么处理是你的事”

### “工程级选择口诀”

要不要让子组件“知道父组件在干什么”？

❌ 不要 → defineEmits

✅ 要 → 传函数 props
