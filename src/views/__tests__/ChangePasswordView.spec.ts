import { mount } from '@vue/test-utils'
import ChangePasswordView from '../views/ChangePasswordView.vue'
import { createApp, h } from 'vue'
import { useRoute, useRouter } from 'vitest/use-vue-router'
import axios from 'axios'
import { afterEach, describe, it } from 'vitest'

// Mock axios post method
jest.mock('axios', () => ({
  post: jest.fn()
}))

describe('ChangePasswordView', () => {
  let app

  beforeEach(() => {
    // Mocking Vue router
    app = createApp({
      setup() {
        useRoute()
        useRouter()
        return {}
      },
      render: () => h(ChangePasswordView)
    })

    // Mounting the component
    mount(app)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('calls handleChangePassword method on button click', async () => {
    // Mocking the response from axios
    axios.post.mockResolvedValueOnce({ status: 200 })

    // Fill in password fields
    const newPasswordInput = document.querySelector('input[type="password"]')
    newPasswordInput.value = 'newpassword'
    await newPasswordInput.dispatchEvent(new Event('input'))

    const confirmPasswordInput = document.querySelectorAll('input[type="password"]')[1]
    confirmPasswordInput.value = 'newpassword'
    await confirmPasswordInput.dispatchEvent(new Event('input'))

    // Find and click the Change Password button
    const changePasswordButton = document.querySelector('button')
    await changePasswordButton.click()

    // Assert that axios.post was called with the correct data
    expect(axios.post).toHaveBeenCalledWith('user/reset-password-token', {
      email: '', // Fill in with the email value you are testing with
      token: '', // Fill in with the reset token value you are testing with
      password: 'newpassword',
      password_confirmation: 'newpassword'
    })

    // Assert that the router was redirected to the home page
    expect(window.location.pathname).toBe('/')
  })

  it('displays error message if password fields do not match', async () => {
    // Fill in password fields
    const newPasswordInput = document.querySelector('input[type="password"]')
    newPasswordInput.value = 'newpassword'
    await newPasswordInput.dispatchEvent(new Event('input'))

    const confirmPasswordInput = document.querySelectorAll('input[type="password"]')[1]
    confirmPasswordInput.value = 'differentpassword'
    await confirmPasswordInput.dispatchEvent(new Event('input'))

    // Find and click the Change Password button
    const changePasswordButton = document.querySelector('button')
    await changePasswordButton.click()

    // Assert that axios.post was not called
    expect(axios.post).not.toHaveBeenCalled()

    // Assert that an error message is displayed (you should implement this in your component)
    const errorMessage = document.querySelector('.error-message') // Replace with actual error message selector
    expect(errorMessage).toBeTruthy()
  })
})
