import Clock from 'react-digital-clock';
function User( { userData } ) {
    
    return (
        <>
        <h4 id="user-id"> Hello human. The time is </h4>
        <div id="clock">
        <Clock /> 
        </div>
        </>
    )
}


export default User;


