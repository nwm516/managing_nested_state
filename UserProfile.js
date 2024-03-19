import React, { useState } from 'react';

function UserProfile() {
    const [userProfile, setUserProfile] = useState({
        name: "",
        email: "",
        address: {
            street: "",
            city: "",
            country: ""
        }
    });

    function updateAddress(street, city, country) {  
        // setUserProfile and spread syntax allows us to maintain immutability by means of the useState hook  
        setUserProfile(oldProfile => ({
            ...oldProfile,
            address: {
                ...oldProfile.address,
                street: street,
                city: city,
                country: country
            }
        }));
    }

    return (
        <div>
            <input type="text" id="streetInput" placeholder="Street" />
            <input type="text" id="cityInput" placeholder="City" />
            <input type="text" id="countryInput" placeholder="Country"/>
            <button onClick={() => updateAddress(
                document.getElementById('streetInput').value,
                document.getElementById('cityInput').value,
                document.getElementById('countryInput').value
            )}>
                Update Address            
            </button>
            <div>
                <p>Street: {userProfile.address.street}</p>
                <p>City: {userProfile.address.city}</p> 
                <p>Country: {userProfile.address.country}</p> 
            </div>
        </div>
    );
}

export default UserProfile;