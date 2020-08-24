import { Module } from 'vuex'
import { DirectoryState } from '../types/DirectoryState'
import { getters } from './getters'
import { actions } from './actions'
import * as types from './mutation-types'

export const paypalStore: Module<DirectoryState, any> = {
  namespaced: true,
  actions,
  getters,
  mutations: {
    [types.DIRECTORY_UPDATE_REGIONS](state, regions) {
      state.regions = regions
    }
  }
}
