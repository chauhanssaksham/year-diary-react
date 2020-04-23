import React , {useContext} from 'react'
import AuthContext from '../../context/Auth/AuthContext';

const DiaryPage = () => {
    const authContext = useContext(AuthContext);
    return (
        <div>
            Hello,
        </div>
    )
}

export default DiaryPage
