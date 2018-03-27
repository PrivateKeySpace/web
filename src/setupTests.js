import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MockLocalStorage from './__mocks__/MockLocalStorage'

configure({ adapter: new Adapter() })

global.localStorage = new MockLocalStorage()
