import { useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import { faker } from '@faker-js/faker';
import AutoSizer from 'react-virtualized-auto-sizer';
import { UserProfile } from '../UserProfile';
import './styles.css';

export const InfinitList = () => {
  const [data] = useState(() =>
    Array.from({ length: 1000 }).map(item => ({ 
      name: faker.name.fullName(),
      rule: faker.name.jobArea(),
      img: faker.image.avatar()
    }))
  );

  const Row = ({ index }) => (
    <div className={`list-item ${index === 0 && 'selected'}`}>
      <div className="list-item__content">
        <UserProfile userImage={data[index]?.img} />
        <span>
          <text>{data[index]?.name}</text>
          <text>{data[index]?.rule}</text>
        </span>
      </div>
    </div>
  );

  return <AutoSizer className='list__container'>
    {({ height, width }) => (
      <List
        className="List"
        height={height}
        width={width}
        itemCount={data.length}
        itemSize={15}
      >
        {Row}
      </List>
    )}
  </AutoSizer>
}