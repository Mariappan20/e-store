import * as actionTypes from './actionTypes';

export const fetchProductsList = ( filter, value, sortStatus, sortValue ) => {

  console.log('actions',value)
    return {
        type: actionTypes.FETCH_PRODUCTS_LIST,
        isBrandFilterSelected: filter,
        isBrandFilterSelectedValue: value,
        sort: sortStatus,
        sortValue: sortValue

    }
}

export const setProductsList = ( prd, filter, value ) => {
    return {
        type: actionTypes.SET_PRODUCTS_LIST,
        products: prd,
        filter: filter,
        filterValue: value
    }
}

export const fetchBrands = (  ) => {
    console.log('actions-brnds');
    return {
        type: actionTypes.FETCH_BRANDS,
    }
}

export const setBrands = ( brands ) => {
    console.log('brands',brands);
    return {
        type: actionTypes.SET_BRANDS,
        brands: brands,

    }
}

export const sortPrice = ( status, value, filtStatus, filtValue ) => {
    console.log('sorrt-price');
    return {
        type: actionTypes.SORT_PRICE,
        sort: status,
        sortValue: value,
        filtStatus: filtStatus,
        filtValue: filtValue

    }
}

export const setSortPrice = ( sortedArray, status, value ) => {
    console.log('set-p');
    return {
        type: actionTypes.SET_SORT_PRICE,
        sortedProducts: sortedArray,
        sort: status,
        sortValue: value

    }
}

// export const removeFilter = ( status, value, filtStatus, filtValue ) => {
//     console.log('sorrt-REMO-ACTION');
//     return {
//         type: actionTypes.REMOVE_FILTER,
//         sort: status,
//         sortValue: value,
//         filtStatus: filtStatus,
//         filtValue: filtValue
//
//     }
// }

// export const setRemoveFilter = ( sortedArray, status, value ) => {
//     console.log('set-REMO-ACTION');
//     return {
//         type: actionTypes.SET_REMOVE_FILTER,
//         sortedProducts: sortedArray,
//         sort: status,
//         sortValue: value
//
//     }
// }