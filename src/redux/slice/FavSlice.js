import {createSlice} from '@reduxjs/toolkit'
import toast from 'react-hot-toast';


export const FavSlice = createSlice({
    name:'addToFav',
    initialState:{
        value: localStorage.getItem('cartItem')? JSON.parse(localStorage.getItem('cartItem')):[]
    },
    reducers:{
        addToFav:(state,action)=>{
            if(state.value.find((item)=> item.id === action.payload.id)){
                alert("user alredy exist")
            }else{
                state.value.push(action.payload)
                toast.success('Successfully added!')
                localStorage.setItem('cartItem',JSON.stringify(state.value.map((item)=>item)))
            }
            // state.value.push(action.payload)
            //     toast.success('Successfully added!')
            //     localStorage.setItem('cartItem',JSON.stringify(state.value.map((item)=>item)))

        },
        removeFromFav:(state,action)=>{
            let targetOfIndex = state.value.findIndex((item)=> item.id === action.payload)
            state.value.splice(targetOfIndex,1)
            localStorage.setItem('cartItem',JSON.stringify(state.value.map((item)=>item)))
            toast.success('Successfully deleted!')


        }
    }
})

export const {addToFav,removeFromFav} = FavSlice.actions