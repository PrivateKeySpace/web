import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import './__mocks__/localStorage'

configure({ adapter: new Adapter() })
