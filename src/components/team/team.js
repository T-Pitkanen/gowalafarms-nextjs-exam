'use client'
import { useEffect, useState } from 'react';

import Image from "next/image";

const Team = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/employees')
            .then(response => response.json())
            .then(data => setEmployees(data));
    }, []);

    return (
        <div>
            {employees.map(employee => (
                <div key={employee._id}>
                    <Image src={employee.imagePath} alt={employee.name} width={300} height={300} />
                    <h2>{employee.name}</h2>
                    <h3>{employee.position}</h3>
                    <p>{employee.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Team;