"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ArticleServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/articles?category=services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      {" "}
      
      {services.map((service) => (
        <div key={service._id}>
          <Image
            src={service.imagePath}
            alt={service.title}
            width={500}
            height={500}
          />
          <h2>{service.title}</h2>
          <p>{service.body}</p>
          <ul>
            {service.checklist.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ArticleServices;
