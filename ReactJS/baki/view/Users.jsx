import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const [user, setUser] = useState([]);
    const navigation = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token != null) {
            const fetchUsers = async () => {
                try {
                    const response = await axios.get('http://127.0.0.1:3000/api/users', {
                        headers: {
                            Authorization: `Bearer ${JSON.parse(token)}`,
                        }
                    });

                    if (response.data) {
                        console.log(response.data);
                        setUser(response.data);
                    }
                } catch (err) {
                    console.log(err);
                    // Handle the error appropriately
                }
            };

            fetchUsers();
        } else {
            console.log('Token is null:', token);
            navigation('/');
        }
    }, [token, navigation]);

    return (
        <header>
            <h1>User List</h1>
            {user.length > 0 ? (
                <ul>
                    {user.map((u) => (
                        <li key={u.id}>{u.username}</li>
                    ))}
                </ul>
            ) : (
                <p>No users found or not authenticated.</p>
            )}
        </header>
    );
};

export default Users;
