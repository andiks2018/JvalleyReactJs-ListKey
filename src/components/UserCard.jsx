
export default function UserCard( {name, email, phone} ){
    return (
        <div>
            <h3>{name}</h3>
            <small>{email}</small>
            <small>{phone}</small>
        </div>
    )
}