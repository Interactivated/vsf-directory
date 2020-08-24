import { GetterTree } from 'vuex';
import { DirectoryState } from '../types/DirectoryState'

export const getters: GetterTree<DirectoryState, any> = {

  getRegions: (state) => state.regions,

}