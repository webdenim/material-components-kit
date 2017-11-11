import { MDCPersistentDrawer } from '@material/drawer/persistent'

const drawerEl = document.querySelector('.mdc-persistent-drawer')
const drawer = new MDCPersistentDrawer(drawerEl)

export function initDrawer() {
  document.querySelector('.docsite-menu-icon').addEventListener('click', function () {
    drawer.open = !drawer.open
  })

  drawerEl.addEventListener('MDCPersistentDrawer:open', function () {
    console.log('Received MDCPersistentDrawer:open')
  })

  drawerEl.addEventListener('MDCPersistentDrawer:close', function () {
    console.log('Received MDCPersistentDrawer:close')
  })

  closeDrawerOnMobile()

  window.addEventListener('resize', closeDrawerOnMobile)
}

function closeDrawerOnMobile () {
  if (window.innerWidth < 600) {
    drawer.foundation_.close()
  }
}
