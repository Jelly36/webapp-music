import * as types from "./mutation-types"

export default {
  [types.SET_SIGNER] (state, singer) {
    state.singer = singer
  }
}
