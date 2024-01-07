import ResturantCard from './ResturantCard';
import { FaHotel } from 'react-icons/fa6';
import {
  Box,
  Button,
  FormControl,
  Input,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import { SessionRestaurant } from '../services/session-service';
import { useState } from 'react';
import AddRestaurant from './AddRestaurant';

interface IProps {
  sessionName: string;
  resturants?: SessionRestaurant[];
}

const SessionResturant = function({sessionName, resturants }: IProps) {
  const [open, setOpen] = useState(false);

  const handleClose = function () {
    setOpen(!open);
  };

  return (
    <section className='flex flex-col gap-2 w-full justify-center py-5'>
      <div className='flex gap-3'>
        <FaHotel size={40} className='text-orange-600' />
        <h2 className='text-2xl'>Suggested resturants</h2>
        <Button variant='outlined' onClick={handleClose}>
          Suggest a restaurant
        </Button>
      </div>
      {/* Should open a popup asking session details (name, location, imageUrl) with a save button */}
      <AddRestaurant open={open} sessionName={sessionName} onClose={() => setOpen(false)} onSubmit={console.log }/>
      <div className='flex gap-6 overflow-x-auto'>
        {resturants &&
          resturants.map(
            (sessionRestaurant: SessionRestaurant, index: number) => (
              <ResturantCard
                key={index}
                restaurant={sessionRestaurant.restaurant}
                sessionId={sessionRestaurant.sessionId}
                submittedByUserId={sessionRestaurant.submittedByUserId}
              />
            )
          )}
      </div>
    </section>
  );
}

export default SessionResturant;
