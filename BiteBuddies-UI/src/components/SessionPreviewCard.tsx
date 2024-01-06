import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { BiteSession } from '../services/session-service';
import { Box, Button } from '@mui/material';
import { useState } from 'react';

interface Props {
  session: BiteSession;
  onDetailClick: (id: number) => void;
}

export const SessionPreviewCard = ({ session, onDetailClick }: Props) => {
  return (
    <section className='flex justify-between items-center'>
      <Card className='w-64 flex flex-col justify-between border-2 border-solid border-purple-500'>
        <CardContent>
          <Typography variant='h5' component='div'>
            {session.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {session.description}
          </Typography>
        </CardContent>
        <Button onClick={() => onDetailClick(session.id)} variant='contained'>
          View Detail
        </Button>
      </Card>
    </section>
  );
};

export default SessionPreviewCard;
