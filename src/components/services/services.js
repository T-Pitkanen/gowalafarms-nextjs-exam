"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      {" "}
      <h1>The Leader of all Milk</h1>
      <span>Safe and Healthy Milk Since 1975</span>
      {services.map((service) => (
        <div key={service._id}>
          <Image
            src={service.imagePath}
            alt={service.title}
            width={500}
            height={500}
          />
          <h2>{service.title}</h2>
          <span>{service.byline}</span>
          <p>{service.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
