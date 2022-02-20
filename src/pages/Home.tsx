import React from 'react';
import { useGetAllInstrumentsQuery } from '../services/instruments';

const Home: React.FC = () => {
  const { data, error, isLoading } = useGetAllInstrumentsQuery();

  return (
    <main>
      {(() => {
        if(error) return <>{error}</>
        if(isLoading) return <>{isLoading}</>
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
      })() }
    </main>
  );
}

export default Home;
