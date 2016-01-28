import { expect } from 'chai'
import configureStore from '../src/store/configureStore.js'
import reducers from '../src/reducers'
import * as actions from '../src/actions'

const store = configureStore()

describe('INIT', () => {
  describe('Before', () => {
    it('should be false', () => {
      expect(store.getState().app.init).to.be.false
    })
  })

  describe('After', () => {
    it('should be true', () => {
      store.dispatch(actions.init())
      expect(store.getState().app.init).to.be.true
    })
  })
})
