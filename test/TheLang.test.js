import { mount } from '@vue/test-utils'
import TheLang from '@/components/TheLang.vue'
import { expect, test } from 'vitest'
import vuetify from '@/plugins/vuetify'
import store from '@/store/index.js'

test('Testing TheLogo.vue component props', () => {
    const wrapper = mount(TheLang, {
        global: {
            plugins: [vuetify, store]
        },
        props: {
            lang: 'RU' || 'EN'
        }
    })

    expect(wrapper.props().lang)
})


