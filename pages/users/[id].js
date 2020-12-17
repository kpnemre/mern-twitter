import React from 'react'
import {useRouter} from "next/router"
import  SvgComponent from "../../components/Add"
const User = () => {
    const router =useRouter();
    const {id} = router.query;
    return (
        <div>
            <SvgComponent />
        </div>
    )
}

export default User
