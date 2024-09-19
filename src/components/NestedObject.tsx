import React, { useState } from "react";

const NestedObject = () => {
  const [customer, setCustomer] = useState({
    name: "Majeed",
    address: {
      city: "Mumbai",
      country: "India",
      zipcode: 400001,
    },
  });

  const handleCustomer = () => {
    setCustomer({
      ...customer,
      address: {
        ...customer.address,
        city: "Delhi",
        zipcode: 110001,
      },
    });
  };

  return <div>NestedObject</div>;
};

export default NestedObject;
