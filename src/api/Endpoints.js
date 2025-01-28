

export const endPoints = {
    ADDRESS:{
        CREATE_ADRESS : "/Address/create",
        GET_ADRESS : "/Address/myadresses",
        GET_ADRESS_BY_ID : (id) => `/Address/remove/${id}`

    },
    AUTH: {
        REGISTER : "/Auth/register",
        LOGIN : "/Auth/login",
        REFRESH : "/Auth/refresh/token",  // have to put it into AxiosInstance
        MYDETAILS : "/User/my/details"
    },
    CART: {
        MY_CART : "/Cart/mycart",
        ADD_TO_CART : (productid) =>  "",
        INCREMENT_PRODUCT_QUANTITY :(productid) => `/Cart/increase/quantity/${productid}`,
        DECREMENT_PRODUCT_QUANTITY : (productid) => `/Cart/decrease-quantity/${productid}`,
        DELETE_PRODUCT : (productid) => `/Cart/delete/product/${productid}`
    },
    PROCUT : {
        GET_ALL_PRODUCTS : "/Product/all/products"
    }

}