import Home from '../components/Home'
import Shop from '../components/Shop'
import ShopList from '../components/Shop/ShopList'
const routes=[
  {
    path:'/',
    component:Home,
    exact:true
  },
  {
    path:'/shop',
    component:Shop,
    routes:[]
  }
]
export default routes