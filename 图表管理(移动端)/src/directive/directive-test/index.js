import { installDirective } from '@/util'
import Directive from './directive'

Directive.install = installDirective('directive-test', Directive)
export default Directive
