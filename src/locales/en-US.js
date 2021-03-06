import component from './en-US/component'
import globalHeader from './en-US/globalHeader'
import menu from './en-US/menu'
import pwa from './en-US/pwa'
import settingDrawer from './en-US/settingDrawer'
import settings from './en-US/settings'
import userLogin from './en-US/userLogin'
import userRegister from './en-US/userRegister'
import userReset from './en-US/userReset'
import message from './en-US/message'

export default {
  'navBar.lang': 'Languages',
  'layout.user.link.help': 'Help',
  'layout.user.link.privacy': 'Privacy',
  'layout.user.link.terms': 'Terms',
  'app.preview.down.block': 'Download this page to your local project',
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...userLogin,
  ...userRegister,
  ...userReset,
  ...message,
}
