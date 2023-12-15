import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from '../redux/slices/messageSlice';

const Greetings = () => {
  const dispatch = useDispatch();
  const { message, loading } = useSelector((store) => store.message);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  useEffect(() => {}, [loading]);

  return (
    <div>
      {!loading && message?.message && (
        <div className="container mx-auto text-center">
          <h1 className="py-2 text-3xl font-bold text-neutral-600">Hamlet Quotes</h1>
          <p className="p-4 text-lg rounded-sm shadow-lg">{message?.message}</p>
        </div>
      )}
    </div>
  );
};

export default Greetings;
