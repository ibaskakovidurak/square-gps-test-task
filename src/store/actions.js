/**
 * Set a language (locale)
 *
 * @param commit
 * @param lang
 */
export const setLocale = ({ commit }, lang) => {
    commit('setLocale', { locale: lang.locale })
    localStorage.setItem('locale', lang.locale)
}

/**
 * Async (emulation) function for getting markers
 *
 * @param commit
 * @return {Promise<unknown>}
 */
export const getMarkers = async ({ commit }) => {
    const data = JSON.parse(localStorage.getItem(import.meta.env.VITE_MARKER_LIST)) || []
    commit('setMarkers', { markers:  data })

    return new Promise(resolve =>
        setTimeout(() => resolve(data), 1000)
    )
}

/**
 * Async (emulation) function for adding a marker
 *
 * @param commit
 * @param state
 * @param coords
 * @return {Promise<void>}
 */
export const addMarker = async ({ commit, state }, { coords }) => {
    try{
        const request = await fetch(`https://geocode.maps.co/reverse?lat=${coords[1]}&lon=${coords[0]}&api_key=66e046f65392b578566711ldrf3a8e6`)
        const address = await request.json()

        const item = {
            id: state.markerList.length + 1 + '',
            coordinates: coords,
            address: address.display_name,
            active: false,
        }
        const data = [...state.markerList, item]

        commit('setMarkers', { markers:  data })
        localStorage.setItem(import.meta.env.VITE_MARKER_LIST, JSON.stringify(data))
    } catch (e) {
        alert(e)
        throw new Error('Oooops... Something went wrong with the address')
    }
}

/**
 * Setting all the markers on the map
 *
 * @param commit
 * @param state
 * @param data
 */
export const addMarkers = ({ commit, state }, { data }) => {
    localStorage.setItem(import.meta.env.VITE_MARKER_LIST, JSON.stringify(data))
    commit('setMarkers', { markers:  data })
}
