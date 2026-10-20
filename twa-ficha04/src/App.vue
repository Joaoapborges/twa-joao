
<script setup>

  import {ref, computed} from 'vue'
  import {search, byCategory, sortByPrice, categories} from './catalog.js'

  const status = ref('loading') // 'loading' | 'error' | 'ready'
  const error = ref(null)
  const items = ref([])
  const query = ref('')
  const category = ref('')
  const sortDir = ref('desc')
  const selectedId = ref(null)


async function load(url = '/items.json') {
  status.value = 'loading'
  error.value = null
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status} — ${url}`)
    items.value = await res.json() // throws "Unexpected token '<'" if Vite answered with index.html
    status.value = 'ready'
  } catch (err) {
    status.value = 'error'
    error.value = err.message
  } 
}

const visible = computed(()=>{

  let list = search(items.value, query.value)
  if (category.value !== ''){
    list = byCategory(list, category.value)
  }
  return sortByPrice(list, sortDir.value)

})


const cats = computed(() => categories(items.value))

const selected = computed(() => items.value.find((i) => i.id === selectedId.value))


load()
</script>

<template>
  <input v-model="query" placeholder="Search...">

  <select v-model="category">
    <option value="">All</option>
    <option v-for="c in cats" :key="c" :value="c">{{ c }}</option>
  </select>

  <button @click="sortDir = sortDir === 'desc' ? 'asc' : 'desc'">
    {{ sortDir === 'desc' ? '↓' : '↑' }}
  </button>

  <p v-if="status === 'loading'">Loading…</p>

  <p v-else-if="status === 'error'">
    Error: {{ error }}
    <button @click="load()">Retry</button>
  </p>

  <template v-else>
    <p>{{ visible.length }} items</p>
  </template>
</template>