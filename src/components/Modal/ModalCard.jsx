import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectInfo } from '../../reduxConfig/selectors';

export default function ModalCard() {
  const dispatch = useDispatch();
  const info = useSelector(selectInfo);
  console.log(info);
  // name, price, rating, location, description, gallery;
  // useEffect(() => {
  //   dispatch(fetchInfo());
  // }, [dispatch]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await dispatch(fetchInfo());
  //     console.log('Data from fetchInfo:', data);
  //   };

  //   fetchData();
  // }, [dispatch]);

  return (
    <div>
      {/* <h3>{name}</h3>
      <p>{rating}</p>
      <p>{location}</p>
      <h3>{price}</h3>
      <div className="gallery">
        {gallery &&
          gallery.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
      </div>
      <p>{description}</p> */}
    </div>
  );
}
