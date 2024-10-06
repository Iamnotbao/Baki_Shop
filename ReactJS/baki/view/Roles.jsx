import axios from "axios";
import React, { useEffect, useState } from "react";


const Roles = () => {
    const [role, setRole] = useState([]);
    const token = localStorage.getItem('token');
    console.log(token);


    useEffect(() => {
        if (token) {
            try {
                async function fetchData() {
                    const response = await axios.get("http://127.0.0.1:3000/api/roles", {
                        headers: {
                            Authorization: `Bearer ${JSON.parse(token)}`
                        }
                    });
                    if (response.data) {
                        console.log(response.data);
                        setRole(response.data);
                    };
                }

                fetchData();
            }
            catch (err) {
                console.log(err)
            }
        }
        else {
            console.log("Invalid token");
        }



    }, [])

    return (
        <div>
            <header>
                <h1>
                    Roles
                </h1>
            </header>
            <div>
                {role.length > 0?(
                <div>
                    <table border={1}>
                        <tr style={{color:'red'}}>
                            <th>Role_id</th>
                            <th>Role_name</th>
                        </tr>

                        {role.map((item) => (
                            <tr style={{color:'red'}} key={item._id} >
                                <td>{item._id}</td>
                                <td>{item.role_name}</td>
                            </tr>
                        ))}

                    </table>
                </div>
                ):(
                <div>
                    <p>Data not found</p>
                </div>
                )}
            </div>
        </div>
    )
}
export default Roles;