import {createBrowserRouter} from 'react-router-dom'
import Layout from './layouts/Layout'
import Products,{loader as productsLoader} from './views/Products'
import NewProducts,{action as newProductAction} from './views/NewProducts'
import EditProduct,{loader as EditProductLoader, action as editProductAction} from './views/EditProduct'
import { action as deleteProductAction } from './components/ProductDetails'

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Products/>,
                loader:productsLoader
            },
            {
                path:'productos/nuevo',
                element:<NewProducts/>,
                action:newProductAction
            },
            {
                path:"productos/:id/editar",// resource oriented designed
                element:<EditProduct/>,
                loader:EditProductLoader,
                action:editProductAction
            },
            {
                path:"productos/:id/eliminar",
                action:deleteProductAction

            }
        ]
    }
])