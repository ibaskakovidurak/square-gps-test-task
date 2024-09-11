/**
 * Mutation for setting the markers
 *
 * @param state
 * @param markers
 */
export const setMarkers = (state, { markers }) => {
    state.markerList = markers
}

/**
 * Mutation for setting a language (locale)
 *
 * @param state
 * @param locale
 */
export const setLocale = (state, { locale }) => {
    state.locale = locale
}