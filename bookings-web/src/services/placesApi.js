export const getPlaces = async (page) => {
  const response = await fetch(`${process.env.BASE_URL}/places`);
  if(response.ok) {
    const data = await response.json();
    const i = page * 9;
    const result = data.slice(i, i + 9);

    return result.map(
      ({
        price_per_night,
        image_thumbnail,
        max_guests,
        pet_friendly,
        ...place
      }) => ({
        ...place,
        pricePerNight: price_per_night,
        imageThumbnail: image_thumbnail,
        maxGuests: max_guests,
        petFriendly: pet_friendly,
      })
    );
  } else {
    throw new Error(await response.json());
  }
};

export const getPlaceById = async (id) => {
  const response = await fetch(`${process.env.BASE_URL}/places/${id}`);
  if(response.ok){
    const result = await response.json();
    return result;
  }
};

export const signUpUser = async (name, email, password) => {
  const response = await fetch(`${process.env.BASE_URL}/users/create`, {
    method:'POST',
    headers:{ 'Content-Type':'application/json' },
    body:JSON.stringify({
      username:`${name}`,
      email:`${email}`,
      password:`${password}`,
    })
  });
  const result = await response.json();
  return result;
};

export const loginUser = async (email, password) => {
  const response = await fetch(`${process.env.BASE_URL}/users/login`, {
    method:'POST',
    credentials:'include',
    headers:{ 'Content-Type':'application/json' },
    body:JSON.stringify({
      email,
      password
    })
  });
  
  const result = await response.json();
  return {
    id: result._id,
    username: result.username, 
    email: result.email,
  };
 
};

export const logoutUser = async () => {
  const response = await fetch(`${process.env.BASE_URL}/users/logout`, {
    credentials:'include',
  });
  
  const json = await response.json();
  return json;
};


export const createBooking = async (checkIn, checkOut, placeId) => {
  const response = await fetch(`${process.env.BASE_URL}/bookings/create`, {
    method:'POST',
    headers:{ 'Content-Type':'application/json' },
    credentials:'include',
    body:JSON.stringify({
      start_date: checkIn,
      end_date: checkOut,
      place_id: placeId,
    })
  });
  const result = await response.json();
  return result; 
};

// export const upDateUser = async () => {
//   const response = await fetch(`${process.env.BASE_URL}/users/update`);
// };
