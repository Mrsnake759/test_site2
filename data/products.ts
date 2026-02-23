export type Category = 'plitka-bruschatka' | 'bordyury-ograzhdeniya'
export type SurfaceTech = 'gladkaya' | 'colormix' | 'otmyv'
export type PriceUnit = 'm2' | 'sht' | 'set'

export interface ColorVariant {
  name: string
  tech: SurfaceTech
  note?: string
  hex?: string
}

export interface Product {
  id: string
  slug: string
  category: Category
  typeLabel: string
  name: string
  shortName: string
  description: string
  priceFrom: number
  priceUnit: PriceUnit
  lengthMm?: number
  widthMm?: number
  heightMm?: number
  sizeVariants?: { lengthMm: number; widthMm: number; heightMm: number }[]
  exploitationGroup?: 'A' | 'B'
  compressClass?: string
  tensileClass?: string
  abrasionMark?: string
  frostMark?: string
  colors: ColorVariant[]
  tags: string[]
  heroImage?: string
}

const smoothColors: ColorVariant[] = [
  { name: 'Серый', tech: 'gladkaya', note: 'Гладкая поверхность', hex: '#9C9C98' },
  { name: 'Белый', tech: 'gladkaya', note: 'Гладкая поверхность', hex: '#ECEAE3' },
  { name: 'Песочный', tech: 'gladkaya', note: 'Гладкая поверхность', hex: '#C9B38D' },
  { name: 'Красный', tech: 'gladkaya', note: 'Гладкая поверхность', hex: '#9E4336' },
  { name: 'Коричневый', tech: 'gladkaya', note: 'Гладкая поверхность', hex: '#6C4D3E' },
  { name: 'Оранжевый', tech: 'gladkaya', note: 'Гладкая поверхность', hex: '#C46F3A' },
  { name: 'Желтый', tech: 'gladkaya', note: 'Гладкая поверхность', hex: '#D1AE55' },
  { name: 'Черный', tech: 'gladkaya', note: 'Гладкая поверхность', hex: '#232426' }
]

const colormixColors: ColorVariant[] = [
  { name: 'Гранит', tech: 'colormix', note: 'Колормикс', hex: '#8D8D90' },
  { name: 'Антрацит', tech: 'colormix', note: 'Колормикс', hex: '#414247' },
  { name: 'Арабика', tech: 'colormix', note: 'Колормикс', hex: '#6C4F42' },
  { name: 'Закат', tech: 'colormix', note: 'Колормикс', hex: '#A8614E' },
  { name: 'Рассвет', tech: 'colormix', note: 'Колормикс', hex: '#B9A189' }
]

const washColors: ColorVariant[] = [
  { name: 'Белый кварц', tech: 'otmyv', note: 'Отмыв', hex: '#DDDDD9' },
  { name: 'Черный гранит', tech: 'otmyv', note: 'Отмыв', hex: '#2D3137' },
  { name: 'Графит', tech: 'otmyv', note: 'Отмыв', hex: '#575A61' },
  { name: 'Серый кварц', tech: 'otmyv', note: 'Отмыв', hex: '#A6A8AD' },
  { name: 'Красный гранит', tech: 'otmyv', note: 'Отмыв', hex: '#81453F' }
]

export const basePalette: ColorVariant[] = [...smoothColors, ...colormixColors, ...washColors]

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'bruschatka-p20-10-6',
    category: 'plitka-bruschatka',
    typeLabel: 'Брусчатка',
    name: 'Брусчатка — (Б) П20.10.6',
    shortName: 'П20.10.6',
    description: 'Сдержанная элегантность и универсальность. Баланс формы и функциональности для частных и общественных пространств.',
    priceFrom: 1590,
    priceUnit: 'm2',
    lengthMm: 200,
    widthMm: 100,
    heightMm: 60,
    exploitationGroup: 'B',
    compressClass: 'В 25',
    tensileClass: 'B tb 3.7',
    abrasionMark: 'G2',
    frostMark: 'F2200',
    colors: basePalette,
    tags: ['Премиум', 'Универсальный формат', 'Для двора'],
    heroImage: '/images/alpha/catalog-tiles.svg'
  },
  {
    id: 'p2',
    slug: 'bruschatka-p60-20-6',
    category: 'plitka-bruschatka',
    typeLabel: 'Брусчатка',
    name: 'Брусчатка — (Б) П60.20.6',
    shortName: 'П60.20.6',
    description: 'Длинные линии придают пространству динамику, подчёркивая чистоту форм и спокойную геометрию.',
    priceFrom: 1990,
    priceUnit: 'm2',
    lengthMm: 600,
    widthMm: 200,
    heightMm: 60,
    exploitationGroup: 'B',
    compressClass: 'В 25',
    tensileClass: 'B tb 3.6',
    abrasionMark: 'G2',
    frostMark: 'F2200',
    colors: basePalette,
    tags: ['Линейный рисунок', 'Городской стиль', 'Премиум'],
    heroImage: '/images/alpha/catalog-curbs.svg'
  },
  {
    id: 'p3',
    slug: 'bruschatka-p60-30-8',
    category: 'plitka-bruschatka',
    typeLabel: 'Брусчатка',
    name: 'Брусчатка — (Б) П60.30.8',
    shortName: 'П60.30.8',
    description: 'Строгая, уверенная и монументальная. Формирует архитектурный статус проекта.',
    priceFrom: 1990,
    priceUnit: 'm2',
    lengthMm: 600,
    widthMm: 300,
    heightMm: 80,
    exploitationGroup: 'B',
    compressClass: 'В 25',
    tensileClass: 'B tb 3.6',
    abrasionMark: 'G2',
    frostMark: 'F2200',
    colors: basePalette,
    tags: ['Монументальность', 'Для города', 'Высокая толщина'],
    heroImage: '/images/alpha/catalog-tiles.svg'
  },
  {
    id: 'p4',
    slug: 'plitka-antik',
    category: 'plitka-bruschatka',
    typeLabel: 'Тротуарная плитка',
    name: 'Тротуарная плитка — (Б) АНТИК',
    shortName: 'АНТИК',
    description: 'Живое дыхание времени и благородное старение материалов в современном прочтении.',
    priceFrom: 1790,
    priceUnit: 'm2',
    sizeVariants: [
      { lengthMm: 73, widthMm: 91, heightMm: 60 },
      { lengthMm: 83, widthMm: 91, heightMm: 60 },
      { lengthMm: 93, widthMm: 91, heightMm: 60 },
      { lengthMm: 103, widthMm: 91, heightMm: 60 },
      { lengthMm: 113, widthMm: 91, heightMm: 60 }
    ],
    exploitationGroup: 'B',
    compressClass: 'В 25',
    tensileClass: 'B tb 3.6',
    abrasionMark: 'G2',
    frostMark: 'F2200',
    colors: basePalette,
    tags: ['Классика', 'Фактурность', 'Пешеходные зоны'],
    heroImage: '/images/alpha/surface-wash.svg'
  },
  {
    id: 'p5',
    slug: 'plitka-novyy-gorod-40',
    category: 'plitka-bruschatka',
    typeLabel: 'Тротуарная плитка',
    name: 'Тротуарная плитка — (А) НОВЫЙ ГОРОД 40',
    shortName: 'НОВЫЙ ГОРОД 40',
    description: 'Современная мозаика, которая формирует уютные дворы и аккуратные пешеходные улицы.',
    priceFrom: 1690,
    priceUnit: 'm2',
    sizeVariants: [
      { lengthMm: 160, widthMm: 160, heightMm: 40 },
      { lengthMm: 160, widthMm: 80, heightMm: 40 },
      { lengthMm: 240, widthMm: 160, heightMm: 40 }
    ],
    exploitationGroup: 'A',
    compressClass: 'В 25',
    tensileClass: 'B tb 3.6',
    abrasionMark: 'G2',
    frostMark: 'F2200',
    colors: basePalette,
    tags: ['Пешеходный формат', 'Современная геометрия', 'Для частных территорий'],
    heroImage: '/images/alpha/surface-smooth.svg'
  },
  {
    id: 'p6',
    slug: 'plitka-novyy-gorod-80',
    category: 'plitka-bruschatka',
    typeLabel: 'Тротуарная плитка',
    name: 'Тротуарная плитка — (Б) НОВЫЙ ГОРОД 80',
    shortName: 'НОВЫЙ ГОРОД 80',
    description: 'Сила и уверенность для объектов с повышенной нагрузкой в современной урбанистической эстетике.',
    priceFrom: 1690,
    priceUnit: 'm2',
    sizeVariants: [
      { lengthMm: 160, widthMm: 160, heightMm: 80 },
      { lengthMm: 160, widthMm: 80, heightMm: 80 },
      { lengthMm: 240, widthMm: 160, heightMm: 80 }
    ],
    exploitationGroup: 'B',
    compressClass: 'В 30',
    tensileClass: 'B tb 4.0',
    abrasionMark: 'G1',
    frostMark: 'F2200',
    colors: basePalette,
    tags: ['Для нагрузки', 'Муниципальные объекты', 'Премиум'],
    heroImage: '/images/alpha/surface-colormix.svg'
  },
  {
    id: 'p7',
    slug: 'bordyur-dorozhnyy-br100-30-18-15',
    category: 'bordyury-ograzhdeniya',
    typeLabel: 'Бордюр дорожный',
    name: 'Бордюр дорожный — БР100.30.18(15)',
    shortName: 'БР100.30.18(15)',
    description: 'Формирует структуру пространства и подчёркивает границы с архитектурной строгостью.',
    priceFrom: 1190,
    priceUnit: 'sht',
    lengthMm: 1000,
    widthMm: 300,
    heightMm: 180,
    exploitationGroup: 'B',
    compressClass: 'В 25',
    tensileClass: 'B tb 3.6',
    abrasionMark: 'G2',
    frostMark: 'F2200',
    colors: basePalette,
    tags: ['Дорожный профиль', 'Для магистралей', 'Надёжность'],
    heroImage: '/images/alpha/catalog-curbs.svg'
  },
  {
    id: 'p8',
    slug: 'bordyur-sadovyy-br100-20-8',
    category: 'bordyury-ograzhdeniya',
    typeLabel: 'Бордюр садовый',
    name: 'Бордюр садовый — БР100.20.8',
    shortName: 'БР100.20.8',
    description: 'Незаметный герой ландшафта — деталь, делающая ансамбль аккуратным и завершённым.',
    priceFrom: 790,
    priceUnit: 'sht',
    lengthMm: 1000,
    widthMm: 200,
    heightMm: 80,
    exploitationGroup: 'B',
    compressClass: 'В 25',
    tensileClass: 'B tb 3.6',
    abrasionMark: 'G2',
    frostMark: 'F2200',
    colors: basePalette,
    tags: ['Садовый профиль', 'Ландшафт', 'Аккуратные границы'],
    heroImage: '/images/alpha/catalog-curbs.svg'
  },
  {
    id: 'p9',
    slug: 'plitka-staryy-gorod-60-4',
    category: 'plitka-bruschatka',
    typeLabel: 'Тротуарная плитка',
    name: 'Тротуарная плитка — (Б) СТАРЫЙ ГОРОД 60 — 4 шт.',
    shortName: 'СТАРЫЙ ГОРОД 60 / 4 шт.',
    description: 'Тёплая классика европейских мостовых с исторической душой пространства.',
    priceFrom: 1990,
    priceUnit: 'set',
    sizeVariants: [
      { lengthMm: 140, widthMm: 70, heightMm: 60 },
      { lengthMm: 140, widthMm: 70, heightMm: 60 },
      { lengthMm: 210, widthMm: 140, heightMm: 60 },
      { lengthMm: 280, widthMm: 210, heightMm: 60 }
    ],
    exploitationGroup: 'B',
    compressClass: 'В 25',
    tensileClass: 'B tb 3.6',
    abrasionMark: 'G2',
    frostMark: 'F2200',
    colors: basePalette,
    tags: ['Классика', 'Набор 4 элемента', 'Премиум'],
    heroImage: '/images/alpha/surface-wash.svg'
  },
  {
    id: 'p10',
    slug: 'plitka-staryy-gorod-60-3',
    category: 'plitka-bruschatka',
    typeLabel: 'Тротуарная плитка',
    name: 'Тротуарная плитка — (Б) СТАРЫЙ ГОРОД 60 — 3 шт.',
    shortName: 'СТАРЫЙ ГОРОД 60 / 3 шт.',
    description: 'Более лаконичная версия вечной классики: современный комфорт с традиционным характером.',
    priceFrom: 1890,
    priceUnit: 'set',
    sizeVariants: [
      { lengthMm: 60, widthMm: 70, heightMm: 120 },
      { lengthMm: 120, widthMm: 120, heightMm: 60 },
      { lengthMm: 180, widthMm: 120, heightMm: 60 }
    ],
    exploitationGroup: 'B',
    compressClass: 'В 25',
    tensileClass: 'B tb 3.6',
    abrasionMark: 'G2',
    frostMark: 'F2200',
    colors: basePalette,
    tags: ['Классика', 'Набор 3 элемента', 'Европейский стиль'],
    heroImage: '/images/alpha/surface-colormix.svg'
  }
]

export const priceUnitLabel: Record<PriceUnit, string> = {
  m2: 'м²',
  sht: 'шт',
  set: 'комплект'
}
