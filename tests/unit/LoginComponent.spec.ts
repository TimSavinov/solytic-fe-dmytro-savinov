import { shallowMount } from '@vue/test-utils';
import Login from "@/views/Login.vue";


describe("Login.vue", () => {
  
  it("login component rendered", () => {
    const wrapper = shallowMount(Login);
    expect(wrapper.text()).toMatch('Login Form');
  });

  it("username should be a valid e-mail", async () => {
    const wrapper = shallowMount(Login);
    await wrapper.find('input[type=email]').setValue('wrongemailformat');
    await wrapper.find('input[type=password]').setValue('password');
    await wrapper.find('#login-btn').trigger('click');

    expect(wrapper.text()).toMatch('Value is not a valid email address');
  });

  it("password should be at least 8 characters long", async () => {
    const wrapper = shallowMount(Login);
    await wrapper.find('input[type=email]').setValue('mail@test.com');
    await wrapper.find('input[type=password]').setValue('short');
    await wrapper.find('#login-btn').trigger('click');

    expect(wrapper.text()).toMatch('This field should be at least 8 characters long');
  });

  it("login button is disabled unless login and password set", async () => {
    const wrapper = shallowMount(Login);
    await wrapper.find('input[type=email]').setValue('');
    await wrapper.find('input[type=password]').setValue('');

    const loginButton = wrapper.find('#login-btn')
    expect(loginButton.attributes('disabled')).toBe('')
  });

  it("login button gets enabled once login and password set", async () => {
    const wrapper = shallowMount(Login);
    await wrapper.find('input[type=email]').setValue('mail');
    await wrapper.find('input[type=password]').setValue('password');

    const loginButton = wrapper.find('#login-btn')
    expect(loginButton.attributes('disabled')).toBeUndefined();
  });

  it("login button gets enabled once login and password set", async () => {
    const wrapper = shallowMount(Login);
    await wrapper.find('input[type=email]').setValue('mail');
    await wrapper.find('input[type=password]').setValue('password');

    const loginButton = wrapper.find('#login-btn')
    expect(loginButton.attributes('disabled')).toBeUndefined();
  });
});
