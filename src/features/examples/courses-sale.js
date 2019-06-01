import React, { useState } from "react";
import styled from "styled-components";

const coursesData = [
  { id: 2, name: "Complete iOS10 dev", price: 99 },
  { id: 3, name: "Complete Rust", price: 299 },
  { id: 4, name: "Frontend dev", price: 939 },
  { id: 33, name: "Backend dev", price: 19 },
  { id: 63, name: "Fullstack dev", price: 49 },
  { id: 88, name: "Complete iOS10 dev", price: 99 }
];

export const CourseWrapper = () => <CourseSales coursesData={coursesData} />;

export const CourseSales = () => {
  const [total, setTotal] = useState(0);

  const courses = coursesData.map(item => {
    return (
      <div className="ui cards">
        <Course
          name={item.name}
          price={item.price}
          key={item.id}
          total={total}
          setTotal={setTotal}
        />
      </div>
    );
  });

  return (
    <div>
      <p>Total: {total}</p>
      {courses}
    </div>
  );
};

export const Course = ({ name, price, setTotal }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="card">
      <div className="content">
        <div className="header">{name}</div>
        <div className="description">Price is {price}</div>
      </div>
      <div className="ui bottom attached button">
        <Button4
          onClick={() => {
            setTotal(total => total + (active ? -price : price));
            setActive(active => !active);
          }}
        >
          {active ? (
            "added"
          ) : (
            <>
              add me <i className="add icon" />
            </>
          )}
        </Button4>
      </div>
    </div>
  );
};

export const Button4 = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  background-color: #61dafb;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  transition: box-shadow 120ms;
  user-select: none;
  font-weight: bold;
  &:hover {
    background-color: #4cb0fb;
    color: #fff;
  }
`;
