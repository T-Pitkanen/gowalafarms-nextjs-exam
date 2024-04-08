'use client';
import { useEffect, useState } from 'react';
import styles from './sponsors.module.css';
import Image from 'next/image';



const Sponsors = () => {

    const [sponsors, setSponsors] = useState([]);

    const getSponsors = async () => {
            
            const response = await fetch('http://localhost:3000/api/sponsors');
            const data = await response.json();
            setSponsors(data);
    };

    useEffect(() => {

        getSponsors();

    }, []);


    const handleSubmit = async (e) => {

        e.preventDefault();

        const {title, file} = e.target.elements;
       
        if(!title.value || !file.files[0]) {

            console.log('You need a title and a file!');
            return;

        }
        
        const formData = new FormData();
        formData.append('title', title.value);
        formData.append('file', file.files[0]);

        let response = await fetch('http://localhost:3000/api/sponsor', {
            method: 'POST',
            body: formData
        })

        let data = await response.json();

        getSponsors();
    }

    const handleDelete = async (e, id) => {

        e.preventDefault();
        let response = await fetch('http://localhost:3000/api/sponsor?id=' + id, {
            method: 'DELETE'
        })
        let data = await response.json();

        getSponsors();
    }

    return (
        
        <div className={styles.container}>

            <h2>Sponsors</h2>

            {sponsors.map((sponsor, index) => {
                    
                    return (
                        <span className={styles.sponsorContainer} key={index}>
                            <Image className={styles.sponsorImg} src={sponsor.imagePath} alt={sponsor.title} width={100} height={100}/>
                            <button onClick={(e) => handleDelete(e, sponsor._id)}>Delete</button>
                        </span>
                    )
            })}

            <h3>Add New Sponsor</h3>

            <form onSubmit={handleSubmit}>
                <label> Sponsor title
                    <input type="title" name="title" placeholder="Sponsor Title" defaultValue={'New Sponsor'}/>
                </label>
                <label> Choose File
                    <input type="file" name="file" placeholder="Select File"/>
                </label>
                <button>Upload</button>
            </form>   



        </div>
    )
};
export default Sponsors;