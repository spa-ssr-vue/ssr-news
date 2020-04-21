const state = () => ({
  channelList: []
})

const getters = {
  userChannelList(state) {
    return state.channelList.slice(0, 20)
  },
  abandonChannelList(state) {
    return state.channelList.slice(20, 41)
  },
  localChannelList(state) {
    return state.channelList.slice(41, 62)
  }
}

const mutations = {
  channel(state, channels) {
    state.channelList = channels
  }
}

const actions = {
  async fetchChannel({ commit, state }) {
    if (state.channelList.length !== 0) {
      return
    }
    const channels = await this.$axios.$get('/channels')
    commit('channel', channels)
  }
}

export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
