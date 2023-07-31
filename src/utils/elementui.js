import Vue from 'vue'
import {
  Button,
  Table,
  TableColumn,
  Input,
  Message,
  Header,
  Main,
  Aside,
  Container,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Loading,
  Link,
  Card,
  Switch,
  Dialog,
  Form,
  FormItem,
  Option,
  Select,
  Popconfirm,
  Upload
} from 'element-ui'

Vue.prototype.$message = Message
Vue.use(Dialog)
Vue.use(Upload)
Vue.use(Popconfirm)
Vue.use(Form)
Vue.use(Option)
Vue.use(Select)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Switch)
Vue.use(Card)
Vue.use(Link)
Vue.use(Table)
Vue.use(Input)
Vue.use(TableColumn)
Vue.use(Header)
Vue.use(Main)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Loading)
