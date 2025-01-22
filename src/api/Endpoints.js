export const endPoints = {
    ADDRESS:{
        CREATE_ADRESS : "/Address/create",
        GET_ADRESS : "/Address/myadresses",
        GET_ADRESS_BY_ID : (id) => `/Address/remove/${id}`

    },
    AUTH: {
        REGISTER : "/Auth/register",
        LOGIN : "Auth/login",
        REFRESH : "Auth/refresh/token"  // have to put it into AxiosInstance
    },
    CART: {
        MY_CART : "/Cart/mycart",
        ADD_TO_CART : (productId) =>  ""
    }

}