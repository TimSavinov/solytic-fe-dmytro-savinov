import { shallowMount } from '@vue/test-utils';
import User from "@/views/User.vue";

describe("User.vue", () => {
  
  it("user component rendered", () => {
    const wrapper = shallowMount(User);
    expect(wrapper.text()).toMatch('user id');
  });

  it('user info gets displayed', () => {
    const wrapper = shallowMount(User);
    wrapper.setData({
        User: [
        {
          id: '1',
          email: 'whatever@mail.com',
        },
      ],
    })
    expect(wrapper.element).toMatchSnapshot()
  })

});
