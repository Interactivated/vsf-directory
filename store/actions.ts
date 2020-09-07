import { DirectoryState } from '../types/DirectoryState'
import { ActionTree } from 'vuex'
import rootStore from '@vue-storefront/core/store'
import * as types from './mutation-types'

export const actions: ActionTree<DirectoryState, any> = {

  loadRegions ({ commit },  { country } ) {
    return new Promise((resolve, reject) => {
      let url = rootStore.state.config.directory.endpoint.regions
      return fetch(url, { method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ country: country })
      }).then(resp => { return resp.json() })
        .then((resp) => {
          commit(types.DIRECTORY_UPDATE_REGIONS, resp.result)
          resolve(resp)
        })
    })
  }

}
