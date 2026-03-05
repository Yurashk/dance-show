
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/dance-show/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/dance-show"
  },
  {
    "renderMode": 2,
    "route": "/dance-show/video"
  },
  {
    "renderMode": 2,
    "redirectTo": "/dance-show",
    "route": "/dance-show/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3343, hash: 'a69596040b274f381524a1dc0ee6af01a083c9de99c342d13641294f8f778c3a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 963, hash: '56a06ce47796ce7f26a18397982075bf2d0ecad1d091661561035cc31d3f0fed', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52422, hash: '1dc45aeabdb63a4783ec67024425b55668b860c950020bcb4e7d0c929d5a536e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'video/index.html': {size: 52422, hash: '1dc45aeabdb63a4783ec67024425b55668b860c950020bcb4e7d0c929d5a536e', text: () => import('./assets-chunks/video_index_html.mjs').then(m => m.default)},
    'styles-RWRIZSGO.css': {size: 7849, hash: '2/WHeVPNN8E', text: () => import('./assets-chunks/styles-RWRIZSGO_css.mjs').then(m => m.default)}
  },
};
