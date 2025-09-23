import { Children } from "react";


const ReUseableForm = ({ handleSubmit ,submitBtnText ="Submit",children}) => {
   
 const handleLocalSubmit = e => {
        e.preventDefault();

        const data ={
            name: e.target.name.value,
            email: e.target.name.value,
            password: e.target.name.value,
        }
       handleSubmit(data); 
    }


    return (
        <div>
            {/* <h2>{formTitle}</h2> */}
            <>{children}</>
          
            <form onSubmit={handleLocalSubmit} >
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="text" name="phone" />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>

        </div>
    );
};

export default ReUseableForm;