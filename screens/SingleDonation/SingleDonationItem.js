import React from 'react';


import {useSelector} from 'react-redux';

const SingleDonationItem = () => {
  const donationItemInformation = useSelector(
    state => state.donation.selectedDonationInformation,
  );
  console.log(donationItemInformation);
  return null;
};

export default SingleDonationItem;