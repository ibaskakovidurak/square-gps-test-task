import { mount } from '@vue/test-utils'
import SkeletonMarkerList from '@/components/SkeletonMarkerList.vue'
import {test, expect} from 'vitest'
import vuetify from '@/plugins/vuetify'

test('Testing SkeletonMarkerList.vue component props', () => {
    const wrapper = mount(SkeletonMarkerList, {
        global: {
            plugins: [vuetify]
        },
        props: {
            loading: Function
        }
    })

    expect(wrapper.props().loading)
})