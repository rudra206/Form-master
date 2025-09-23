
import './App.css'
// import RefForm from './components/RefForm/RefForm'
import ReUseableForm from './components/RefForm/ReUseableForm/ReUseableForm'
// import SimpleForm from './components/SimpleForm/SimpleForm';

function App() {

   const handleSingUpSubmit = data => {
        console.log(data);
    }

     const handleUpdateProfile = data => {
       console.log('update profile',data);
    }



  return (
    <>
     <h1>Vite + React</h1>
    {/* <SimpleForm></SimpleForm> */}
    {/* <RefForm></RefForm> */}
    <ReUseableForm formTitle={'Sing Up'}
     handleSubmit={handleSingUpSubmit}>
      <div>
        <h2>Sign up</h2>
        <p>please sign up right  now</p>
      </div>
     </ReUseableForm>

    <ReUseableForm formTitle={'Profile Update'}
    handleSubmit={handleUpdateProfile}
     submitBtnText='Update Profile'>
      <div>
        <h2>Update Profile</h2>
        <p>Please always update profile</p>
      </div>
     </ReUseableForm>

    </>
  )
}

export default App
