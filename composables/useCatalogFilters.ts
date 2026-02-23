import type { LocationQueryValue } from 'vue-router'
import { products as allProducts, type Category, type Product, type SurfaceTech } from '~/data/products'

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name'

interface CatalogFiltersState {
  category: Category | 'all'
  groups: Array<'A' | 'B'>
  thicknesses: number[]
  tech: SurfaceTech[]
  colors: string[]
  priceFrom: number | null
  priceTo: number | null
  sort: SortOption
}

const parseSingle = (value?: LocationQueryValue | LocationQueryValue[]) => (Array.isArray(value) ? value[0] : value)
const parseMulti = (value?: LocationQueryValue | LocationQueryValue[]) => {
  const single = parseSingle(value)
  return single ? single.split(',').filter(Boolean) : []
}
const parseNumber = (value?: LocationQueryValue | LocationQueryValue[]) => {
  const single = parseSingle(value)
  if (!single) return null
  const num = Number(single)
  return Number.isFinite(num) ? num : null
}

const getProductHeights = (product: Product): number[] => {
  const values = [product.heightMm, ...(product.sizeVariants?.map((v) => v.heightMm) ?? [])].filter(
    (height): height is number => typeof height === 'number'
  )
  return [...new Set(values)]
}

export const useCatalogFilters = () => {
  const route = useRoute()
  const router = useRouter()
  let silentSync = false

  const state = reactive<CatalogFiltersState>({
    category: 'all',
    groups: [],
    thicknesses: [],
    tech: [],
    colors: [],
    priceFrom: null,
    priceTo: null,
    sort: 'default'
  })

  const availableThicknesses = computed(() => {
    const all = allProducts.flatMap((product) => getProductHeights(product))
    return [...new Set(all)].sort((a, b) => a - b)
  })

  const availableColors = computed(() => {
    const map = new Map<string, string>()
    allProducts.forEach((product) => {
      product.colors.forEach((color) => map.set(color.name, color.hex ?? '#ccc'))
    })
    return [...map.entries()].map(([name, hex]) => ({ name, hex }))
  })

  const serializeQuery = () => {
    const query: Record<string, string> = {}
    if (state.category !== 'all') query.category = state.category
    if (state.groups.length) query.group = state.groups.join(',')
    if (state.thicknesses.length) query.thickness = state.thicknesses.join(',')
    if (state.tech.length) query.tech = state.tech.join(',')
    if (state.colors.length) query.color = state.colors.join(',')
    if (state.priceFrom !== null) query.priceFrom = String(state.priceFrom)
    if (state.priceTo !== null) query.priceTo = String(state.priceTo)
    if (state.sort !== 'default') query.sort = state.sort
    return query
  }

  const syncFromQuery = () => {
    silentSync = true
    const category = parseSingle(route.query.category)
    state.category = category === 'plitka-bruschatka' || category === 'bordyury-ograzhdeniya' ? category : 'all'
    state.groups = parseMulti(route.query.group).filter((value): value is 'A' | 'B' => value === 'A' || value === 'B')
    state.thicknesses = parseMulti(route.query.thickness).map(Number).filter(Number.isFinite)
    state.tech = parseMulti(route.query.tech).filter(
      (value): value is SurfaceTech => value === 'gladkaya' || value === 'colormix' || value === 'otmyv'
    )
    state.colors = parseMulti(route.query.color)
    state.priceFrom = parseNumber(route.query.priceFrom)
    state.priceTo = parseNumber(route.query.priceTo)
    const sort = parseSingle(route.query.sort)
    state.sort = sort === 'price-asc' || sort === 'price-desc' || sort === 'name' ? sort : 'default'
    nextTick(() => {
      silentSync = false
    })
  }

  syncFromQuery()

  const filteredProducts = computed(() => {
    const items = allProducts.filter((product) => {
      if (state.category !== 'all' && product.category !== state.category) return false
      if (state.groups.length && (!product.exploitationGroup || !state.groups.includes(product.exploitationGroup))) return false
      if (state.thicknesses.length && !state.thicknesses.some((height) => getProductHeights(product).includes(height))) return false
      if (state.tech.length && !product.colors.some((color) => state.tech.includes(color.tech))) return false
      if (state.colors.length && !product.colors.some((color) => state.colors.includes(color.name))) return false
      if (state.priceFrom !== null && product.priceFrom < state.priceFrom) return false
      if (state.priceTo !== null && product.priceFrom > state.priceTo) return false
      return true
    })

    if (state.sort === 'price-asc') return [...items].sort((a, b) => a.priceFrom - b.priceFrom)
    if (state.sort === 'price-desc') return [...items].sort((a, b) => b.priceFrom - a.priceFrom)
    if (state.sort === 'name') return [...items].sort((a, b) => a.name.localeCompare(b.name, 'ru'))
    return items
  })

  watch(
    () => route.query,
    () => syncFromQuery()
  )

  watch(
    state,
    async () => {
      if (silentSync) return
      const target = serializeQuery()
      if (JSON.stringify(target) === JSON.stringify(route.query)) return
      await router.replace({ query: target })
    },
    { deep: true }
  )

  const resetFilters = () => {
    state.category = 'all'
    state.groups = []
    state.thicknesses = []
    state.tech = []
    state.colors = []
    state.priceFrom = null
    state.priceTo = null
    state.sort = 'default'
  }

  return { state, availableThicknesses, availableColors, filteredProducts, resetFilters }
}
