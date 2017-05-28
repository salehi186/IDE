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

export const PlayListActions={
ADD_IMAGE:"ADD_IMAGE",
IMPORT_IMAGE:"IMPORT_IMAGE",
DELETE_IMAGE:"DELETE_IMAGE",
SAVE_IMAGE:"SAVE_IMAGE",
SAVE_PLAYLIST:"SAVE_PLAYLIST"
}

///Message Window
var newImageId=-1;
export const AddImage=()=>{
    return{
        type:PlayListActions.AddImage,
        id: (--newImageId)
    }
}

export const ImportImage=(id,image)=>{
return{
    type:PlayListActions.IMPORT_IMAGE,
    id,
    image,
    delay:20
}
}

export const DeleteImage=(id)=>{
    return{
        type:PlayListActions.DELETE_IMAGE,
        id
    }
}
export const SaveImage=(id)=>{
return{
    type:PlayListActions.SAVE_IMAGE,
    id

}
}
export const SavePlayList=(id)=>{
return{
    type:PlayListActions.SAVE_PLAYLIST,
    id
}

}