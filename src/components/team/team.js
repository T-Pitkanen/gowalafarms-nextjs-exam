'use client'
/*import { useEffect, useState } from 'react';
import styles from './team.module.css';

import Image from "next/image";

const Team = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/employees')
            .then(response => response.json())
            .then(data => setEmployees(data));
    }, []);

    return (
        <div className={styles.container}>
          {employees.map(employee => (
            <div key={employee._id} className={styles.card}>
              <Image src={employee.imagePath} alt={employee.name} width={300} height={300} />
              <div className={styles.overlay}>
                <h2>{employee.name}</h2>
                <h3>{employee.position}</h3>
                <p>{employee.description}</p>
              </div>
            </div>
          ))}
        </div>
      );
    };

export default Team; */

import { useEffect, useState } from 'react';
import styles from './team.module.css';
import Image from 'next/image';
import ContentLoader from 'react-content-loader';

const Team = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/employees')
      .then(response => response.json())
      .then(data => {
        setEmployees(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <ContentLoader 
        speed={2}
        width={300}
        height={300}
        viewBox="0 0 300 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="5" ry="5" width="300" height="300" />
       
      </ContentLoader>
    );
  }

  return (
    <div className={styles.container}>
      {employees.map(employee => (
        <div key={employee._id} className={styles.card}>
          <Image src={employee.imagePath} alt={employee.name} width={300} height={300} />
          <div className={styles.overlay}>
            <h2>{employee.name}</h2>
            <h3>{employee.position}</h3>
            <p>{employee.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;