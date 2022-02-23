import React from 'react';
import { useGetAllInstrumentsQuery } from '../services/instruments';
import Spinner from '../components/Spinner';
import { rtkErrorHelper } from '../services/rtkErrorHelper';

const Home: React.FC = () => {
  const { data, error, isLoading } = useGetAllInstrumentsQuery();

  return (
      <main>
        {(() => {
          if (isLoading) return <Spinner />
          if (error) return rtkErrorHelper(error);

          if(data) {
            return (
              <main>
                {data.map((instrument, index) => {
                  // TODO product card
                  return (
                    <div key={instrument.id}>
                      {instrument.name}
                      {instrument.type}
                      {instrument.brand}
                      {instrument.price}
                      {instrument.info}
                    </div>
                  )
                })}
              </main>
            )
          }
        })()}
      </main>
  );
}

export default Home;
