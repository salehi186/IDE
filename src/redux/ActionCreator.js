///Properties Component
export const SetPropValue = (id,value) => {
 return {
 type: "SET_PROPS",
 id: id,
 value
 }
}

export const SetAllProps =(propList)=>{
    return{
    type: "SET_PROPS",
    props:propList
    }
}

///Device Manager
export const FilterVMS=(filterText)=>{
    return{
        type:"FILTER_VMS",
        filterText,
    }
}

///Message Window
var newImageId=-1;
export const AddImage=()=>{
    return{
        type:"ADD_IMAGE",
        id= (--newImageId)
    }
}

export const ImportImage=(id,image)=>{
return{
    type:"IMPORT_IMAGE",
    id,
    image,
    delay:20
}
}

export const DeleteImage=(id)=>{
    return{
        type:"DELETE_IMAGE",
        id
    }
}
export const SaveImage=(id)=>{
return{
    type:"SAVE_IMAGE",
    id

}
}
export const SavePlayList=(id)=>{
return{
    type:"SAVE_PLAYLIST",
    id
}

}