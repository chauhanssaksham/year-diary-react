import Noty from 'noty';
import "../../node_modules/noty/lib/noty.css";  
import "../../node_modules/noty/lib/themes/bootstrap-v4.css";    

export const errorNoty = errMsg =>{
    new Noty({
        text:errMsg,
        type:'error',
        timeout: 3000,
        theme:'bootstrap-v4',
        layout:'bottomRight'
      }).show();
}
