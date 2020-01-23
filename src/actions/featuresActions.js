
export const addAdditionalFeature = feature => {
    return { 
        type: 'ADD_FEATURE', 
        payload: {
            id: feature.id, 
            name: feature.name, 
            price: feature.price
        } 
    }
};


export const removeFeatures = id => {
    return {
        type: 'REMOVE_FEATURE',
        payload: { 
            id: id
        }
    }
}