import { StorefrontModule } from '@vue-storefront/core/lib/modules';
import { directoryStore } from './store'
// import { beforeRegistration } from './hooks/beforeRegistration'
// import { afterRegistration } from './hooks/afterRegistration'

export const KEY = 'directory'

export const DirectoryModule: StorefrontModule = function ({ store, router, appConfig }) {
  // beforeRegistration(appConfig, store)
  store.registerModule(KEY, directoryStore)
  // afterRegistration(appConfig, store)
}