import { Navigate } from 'react-router-dom'
import A from '../views/A'
import { lazy } from 'react'

// A板块的二级路由
const aRoutes = [
  {
    path: '/a',
    component: () => <Navigate to="/a/a1" />
  }, {
    path: '/a/a1',
    name: 'a-a1',
    component: lazy(() => import('../views/a/a')),
    meta: {}
  }, {
    path: '/a/a2',
    name: 'a-a2',
    component: lazy(() => import('../views/a/b')),
    meta: {}
  }, {
    path: '/a/a3',
    name: 'a-a3',
    component: lazy(() => import('../views/a/c')),
    meta: {}
  }]

// 一级路由
const routes = [
  {
    path: '/',
    component: () => <Navigate to="/a" />
  }, {
    path: '/a',
    name: 'a',
    component: A,
    meta: {},
    children: aRoutes
  }, {
    path: '/b',
    name: 'b',
    component: lazy(() => import('../views/B')),
    meta: {}
  }, {
    path: '/c/:id?/:name?',
    name: 'c',
    component: lazy(() => import('../views/C')),
    meta: {}
  }, {
    path: '*',
    component: () => {
      return <Navigate to={ {
        pathname: '/a',
        search: '?lx=404'
      } } />
    }
  }]

export default routes