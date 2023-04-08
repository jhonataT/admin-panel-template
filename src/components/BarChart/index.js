import { ResponsiveBar } from '@nivo/bar';
import './styles.css';

const axisBottom = {
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  legend: 'country',
  legendPosition: 'middle',
  legendOffset: 42
};

const axisLeft = {
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  legend: 'food',
  legendPosition: 'middle',
  legendOffset: -50,
  itemTextColor: "var(--title-color)",
};

const theme = {
  fontSize: "12px",
  textColor: 'var(--title-color)',
  grid: {
    line: {
      stroke: "var(--icon-color)"
    }
  }
};

const legends = [
  {
    dataFrom: "keys",
    anchor: "bottom-right",
    direction: "column",
    justify: false,
    translateX: 120,
    translateY: 0,
    itemsSpacing: 2,
    itemWidth: 100,
    itemHeight: 20,
    itemDirection: "left-to-right",
    itemOpacity: 0.85,
    itemTextColor: "var(--title-color)",
    symbolSize: 20,
    effects: [
      {
        on: "hover",
        style: {
          itemOpacity: 1
        }
      }
    ]
  }
];

export const BarChart = ({ data }) => {
  return <div className="bar-chart__container">
    <ResponsiveBar
      data={data}
      theme={theme}
      keys={[
        'hot dog',
        'burger',
        'sandwich',
        'kebab',
        'fries',
        'donut'
      ]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      arcLinkLabelsTextColor="var(--title-color)"
      colors={{ scheme: 'nivo' }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
      fill={[
        {
          match: {
            id: 'fries'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'sandwich'
          },
          id: 'lines'
        }
      ]}
      axisBottom={axisBottom}
      axisLeft={axisLeft}
      labelSkipWidth={12}
      labelSkipHeight={12}
      legends={legends}
    />
  </div>
}