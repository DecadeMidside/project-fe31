export const ROUTES = {
  USER: {
    ACCOUNT: "/pages/Account",
    ORDEREDHISTORIES: "/pages/Account/OrderedHistories",
    FAVORITES: "/pages/Account/FavoriteProduct",

    CART: "/pages/Cart",
    CHECKOUT: "/pages/Checkout",
    SUCCESSCHECKOUT: "/pages/Checkout/SuccessCheckoutPage/:id",
    REGISTER: "/pages/Register",
    HOME: "/",
    PRODUCT_LIST: "/products",
    PRODUCT_DETAIL: "/products/:id",
    ABOUT: "/pages/About",
    SERVICE: "/pages/Service",
  },
  ADMIN: {
    DASHBOARD: "/pages/admin/Dashboard",
    PRODUCT_MANAGEMENT: "/pages/admin/ProductManagement",
    USER_MANAGEMENT: "/pages/admin/UserManagement",
    CATEGORIES_MANAGEMENT: "/pages/admin/CategoriesManagement",
    CUSTOMERS_MANAGEMENT: "/pages/admin/CustomersManagement",
    ODER_MANAGEMENT: "/pages/admin/OderManagement",
    UPDATE_PRODUCT: "/pages/admin/UpdateProduct/:id",
    UPDATE_USER: "/pages/admin/UpdateUser/:id",
    CREATE_PRODUCT: "/pages/admin/CreateProduct",
  },
  LOGIN: "/login",
};
