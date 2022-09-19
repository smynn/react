import {users} from "../data";
export default function Users()
return (
    <div>
        {
            users.map(user =>(<div>
                    <h2>{user.title}<br/>{user.userId}</h2>
                    <p>{user.body}<br/>{user.id}</p>

                </div>)
            )
        }
    </div>
);