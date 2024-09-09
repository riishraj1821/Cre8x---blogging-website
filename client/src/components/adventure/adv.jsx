import React from 'react';
import "./adv.css";

const AdventurePage = () => {
  return (
    <div className="adventure-container">

      <div className='adv1'>
      <div className="image-container">
        <img src="https://images.pexels.com/photos/18857720/pexels-photo-18857720/free-photo-of-couple-on-a-trail-in-a-forest.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Adventure" className="adventure-image" />
      </div>
      <div className="text-container">
        <h1>Embark on an Adventure</h1>
        <p>
        "Adventure is the heartbeat of life, an exhilarating journey into the unknown. It's the rush of wind in your hair as you zip line through dense forests, the awe-inspiring vistas at the summit of a rugged mountain, and the thrill of exploring hidden caves. It's a call to embrace the extraordinary, to test your limits, and to find your inner explorer. Adventure promises the untamed, the unexpected, and the unforgettable. So, pack your bags, follow the trail less traveled, and let the world's wonders reveal themselves on your daring quest."        </p>
      </div>
      </div>

      <div className='adv2'>
      <div className="image-container">
        <img src="https://images.pexels.com/photos/382177/pexels-photo-382177.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Adventure" className="adventure-image" />
      </div>
      <div className="text-container">
        <h1>Embark on an Adventure</h1>
        <p>
        
India offers a myriad of adventures for the intrepid traveler. From trekking through the majestic Himalayas to embarking on thrilling wildlife safaris in dense jungles, the subcontinent's diversity knows no bounds. Explore the vibrant markets of Rajasthan, sail along the pristine backwaters of Kerala, or indulge in high-octane water sports in Goa. Rich in culture, history, and breathtaking landscapes, India's adventures promise an unforgettable journey. Whether you seek spirituality in the mountains, serenity by the sea, or adrenaline in the wild, India has it all. </p>
      </div>
      </div>
    </div>
    
  );
};

export default AdventurePage;
