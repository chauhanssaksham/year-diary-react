import React , {useContext, useEffect} from 'react'
import AuthContext from '../../context/Auth/AuthContext';

const DiaryPage = () => {
    const authContext = useContext(AuthContext);
    useEffect(()=>{
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);
    return (
        <div>
            HelloWorld
        </div>
    )
}

export default DiaryPage
