import React , {useContext, useEffect, useReducer} from 'react'
import AuthContext from '../../context/Auth/AuthContext';

const DiaryPage = () => {
    const authContext = useContext(AuthContext);
    return (
        <div>
            Hello, {authContext.user.name}
        </div>
    )
}

export default DiaryPage
