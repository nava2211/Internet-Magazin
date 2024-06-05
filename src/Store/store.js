import { configureStore } from '@reduxjs/toolkit'
import AboutSlice from '../reducers/about/aboutSlice'
import HomeSlice from '../reducers/home/homeSlice'
import ContactSlice from '../reducers/contact/contactSlice'
import LoginSlice from '../reducers/login/loginSlice'
import ProductSlice from '../reducers/product/productSlice'
import ProductByIdSlice from '../reducers/productById/productByIdSlice'
import Registration from '../reducers/registration/registration'
import WishListSlice from '../reducers/wishList/wishListSlice'

export const store = configureStore({
    reducer: {
        AboutSlice: AboutSlice,
        HomeSlice: HomeSlice,
        ContactSlice: ContactSlice,
        LoginSlice: LoginSlice,
        ProductSlice: ProductSlice,
        ProductByIdSlice: ProductByIdSlice,
        Registration: Registration,
        WishListSlice: WishListSlice
    },
})
export default store