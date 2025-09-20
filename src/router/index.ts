import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { startProgress, finishProgress } from '@/utils/progress';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home.vue'),
    meta: {
      title: 'Artem Sadomtsev — IT Project Manager / Frontend Developer',
      description: 'Портфолио и резюме Артема Садомцева: проекты, навыки, опыт и контакты.'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/About.vue'),
    meta: {
      title: 'Обо мне — Artem Sadomtsev',
      description: 'Карьера, подход и ценности Артема Садомцева, IT Project Manager и Frontend разработчика.'
    }
  },
  {
    path: '/cases',
    name: 'cases',
    component: () => import('@/pages/Cases.vue'),
    meta: {
      title: 'Кейсы и проекты — Artem Sadomtsev',
      description: 'Подборка реализованных проектов с фильтрами по роли, домену и стеку.'
    }
  },
  {
    path: '/cases/:slug',
    name: 'case-details',
    component: () => import('@/pages/CaseDetails.vue'),
    meta: {
      title: 'Кейс — Artem Sadomtsev',
      description: 'Детальное описание проекта из портфолио Артема Садомцева.'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/pages/Contact.vue'),
    meta: {
      title: 'Контакты — Artem Sadomtsev',
      description: 'Свяжитесь с Артемом Садомцевым: email, Telegram, LinkedIn и форма обратной связи.'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/NotFound.vue'),
    meta: {
      title: 'Страница не найдена — Artem Sadomtsev',
      description: 'Ошибка 404: страница не найдена, вернитесь на главную.'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    }

    return { top: 0, behavior: 'smooth' };
  }
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    startProgress();
  }
  next();
});

router.afterEach((to) => {
  finishProgress();
  if (to.meta?.title) {
    document.title = String(to.meta.title);
  }
});

router.onError(() => {
  finishProgress();
});

export default router;
