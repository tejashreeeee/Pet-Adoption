import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const petData = [
    {
      name: "Pet A",
      img: "/a.jpg",
      species: "dog",
      type: "Puppy <age group>",
      breed: "Indie",
      shelter: "World For All Animal Care and Adoptions",
      ageGroup: "puppy",
      details: {
        description: "This pet is playful and loving.",
        gender: "Female",
        neutered: "Yes",
        age: "6"
      }
    },
    {
      name: "Pet B",
      img: "/b.jpg",
      species: "dog",
      type: "Juvenile <age group>",
      breed: "Indie",
      shelter: "World For All Animal Care and Adoptions",
      ageGroup: "juvenile",
      details: {
        description: "Loyal and friendly, ready for a home.",
        gender: "Male",
        neutered: "No",
        age: "7"
      }
    },
    {
      name: "Pet C",
      img: "/c.jpg",
      species: "dog",
      type: "Young <age group>",
      breed: "Indie",
      shelter: "World For All Animal Care and Adoptions",
      ageGroup: "young",
      details: {
        description: "Gentle and calm, perfect companion.",
        gender: "Female",
        neutered: "No",
        age: "8"
      }
    },
    {
      name: "Pet D",
      img: "/d.jpg",
      species: "dog",
      type: "Mature <age group>",
      breed: "Indie",
      shelter: "World For All Animal Care and Adoptions",
      ageGroup: "mature",
      details: {
        description: "Energetic and full of life!",
        gender: "Male",
        neutered: "Yes",
        age: "9"
      }
    },
    {
      name: "Pet E",
      img: "/e.jpg",
      species: "dog",
      type: "Puppy <age group>",
      breed: "Indie",
      shelter: "World For All Animal Care and Adoptions",
      ageGroup: "puppy",
      details: {
        description: "This pet is playful and loving.",
        gender: "Female",
        neutered: "No",
        age: "10"
      }
    },
    {
      name: "Pet F",
      img: "/f.jpg",
      species: "dog",
      type: "Juvenile <age group>",
      breed: "Indie",
      shelter: "World For All Animal Care and Adoptions",
      ageGroup: "juvenile",
      details: {
        description: "Loyal and friendly, ready for a home.",
        gender: "Male",
        neutered: "No",
        age: "11"
      }
    },
    {
      name: "Pet G",
      img: "/g.jpg",
      species: "dog",
      type: "Young <age group>",
      breed: "Indie",
      shelter: "World For All Animal Care and Adoptions",
      ageGroup: "young",
      details: {
        description: "Gentle and calm, perfect companion.",
        gender: "Female",
        neutered: "Yes",
        age: "12"
      }
    },
    {
      name: "Pet H",
      img: "/h.jpg",
      species: "dog",
      type: "Mature <age group>",
      breed: "Indie",
      shelter: "World For All Animal Care and Adoptions",
      ageGroup: "mature",
      details: {
        description: "Energetic and full of life!",
        gender: "Male",
        neutered: "No",
        age: "13"
      }
    },
    {
      name: "Pet I",
      img: "/i.jpg",
      species: "dog",
      type: "Puppy <age group>",
      breed: "Indie",
      shelter: "World For All Animal Care and Adoptions",
      ageGroup: "puppy",
      details: {
        description: "This pet is playful and loving.",
        gender: "Female",
        neutered: "No",
        age: "14"
      }
    },
    {
      name: "Pet J",
      img: "/j.jpg",
      species: "dog",
      type: "Juvenile <age group>",
      breed: "Indie",
      shelter: "World For All Animal Care and Adoptions",
      ageGroup: "juvenile",
      details: {
        description: "Loyal and friendly, ready for a home.",
        gender: "Male",
        neutered: "Yes",
        age: "15"
      }
    },
    {
      name: "Pet K",
      img: "/k.jpg",
      species: "cat",
      type: "Young <age group>",
      breed: "Indie",
      shelter: "World For All Animal Care and Adoptions",
      ageGroup: "young",
      details: {
        description: "Gentle and calm, perfect companion.",
        gender: "Female",
        neutered: "No",
        age: "16"
      }
    },
    {
      name: "Pet L",
      img: "/l.jpg",
      species: "cat",
      type: "Mature <age group>",
      breed: "Indie",
      shelter: "World For All Animal Care and Adoptions",
      ageGroup: "mature",
      details: {
        description: "Energetic and full of life!",
        gender: "Male",
        neutered: "No",
        age: "17"
      }
    },
    {
      name: "Pet M",
      img: "/m.jpg",
      species: "cat",
      type: "Puppy <age group>",
      breed: "Indie",
      shelter: "World For All Animal Care and Adoptions",
      ageGroup: "puppy",
      details: {
        description: "This pet is playful and loving.",
        gender: "Female",
        neutered: "Yes",
        age: "18"
      }
    },
    {
      name: "Pet N",
      img: "/n.jpg",
      species: "cat",
      type: "Juvenile <age group>",
      breed: "Indie",
      shelter: "World For All Animal Care and Adoptions",
      ageGroup: "juvenile",
      details: {
        description: "Loyal and friendly, ready for a home.",
        gender: "Male",
        neutered: "No",
        age: "19"
      }
    },
    {
      name: "Pet O",
      img: "/o.jpg",
      species: "cat",
      type: "Young <age group>",
      breed: "Indie",
      shelter: "World For All Animal Care and Adoptions",
      ageGroup: "young",
      details: {
        description: "Gentle and calm, perfect companion.",
        gender: "Female",
        neutered: "No",
        age: "20"
      }
    },
    {
      name: "Pet P",
      img: "/p.jpg",
      species: "cat",
      type: "Mature <age group>",
      breed: "Indie",
      shelter: "World For All Animal Care and Adoptions",
      ageGroup: "mature",
      details: {
        description: "Energetic and full of life!",
        gender: "Male",
        neutered: "Yes",
        age: "21"
      }
    },
    {
      name: "Pet Q",
      img: "/q.jpg",
      species: "cat",
      type: "Puppy <age group>",
      breed: "Indie",
      shelter: "World For All Animal Care and Adoptions",
      ageGroup: "puppy",
      details: {
        description: "This pet is playful and loving.",
        gender: "Female",
        neutered: "No",
        age: "22"
      }
    },
    {
      name: "Pet R",
      img: "/r.jpg",
      species: "cat",
      type: "Juvenile <age group>",
      breed: "Indie",
      shelter: "World For All Animal Care and Adoptions",
      ageGroup: "juvenile",
      details: {
        description: "Loyal and friendly, ready for a home.",
        gender: "Male",
        neutered: "No",
        age: "23"
      }
    }
  ];
  
const Browse = () => {
  const [speciesFilter, setSpeciesFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const navigate = useNavigate();

  const handlePetDetails = (pet) => {
    navigate('/pet-details', { state: { pet } });
  };

  const handleAdopt = (pet) => {
    navigate('/adopt-form', { state: { petName: pet.name } });
  };

  const filteredPets = petData.filter(pet => {
    const matchesSpecies = speciesFilter === 'all' || pet.species === speciesFilter;
    const matchesType = typeFilter === 'all' || pet.ageGroup === typeFilter;
    return matchesSpecies && matchesType;
  });

  return (
    <div className="pt-20 px-4">
      {/* Top Image */}
      <img
        src="/a.png"
        alt="Browse Banner"
        style={{ width: '100%', height: '300px', objectFit: 'cover' }}
      />

      {/* Filters */}
      <div className="flex gap-4 my-6 flex-wrap justify-center">
        <select
          value={speciesFilter}
          onChange={(e) => setSpeciesFilter(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="all">All Species</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="all">All Types</option>
          <option value="puppy">Puppy</option>
          <option value="juvenile">Juvenile</option>
          <option value="young">Young Adult</option>
          <option value="mature">Mature</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPets.map((pet, index) => (
          <div key={index} className="border rounded-lg shadow p-4 text-center">
            <img src={pet.img} alt={pet.name} className="w-full h-48 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">{pet.name}</h3>
            <p className="text-sm text-gray-500">{pet.type}</p>
            <p className="text-sm">{pet.breed}</p>
            <p className="text-sm text-gray-600 italic">{pet.shelter}</p>
            <div className="flex justify-around mt-4">
              <button
                onClick={() => handlePetDetails(pet)}
                className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Pet Details
              </button>
              <button
                onClick={() => handleAdopt(pet)}
                className="text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Adopt Me
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
