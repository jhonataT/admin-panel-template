import { ResponsivePie } from '@nivo/pie'
import './styles.css';

const theme = {
  fontSize: "12px",
  textColor: 'var(--chart-color)',
};

export const PieChart = ({ data }) => {
  return <div className="pie-chart__container">
    <ResponsivePie
      data={data}
      theme={theme}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.1}
      padAngle={0.7}
      cornerRadius={6}
      activeOuterRadiusOffset={15}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsThickness={3}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            2
          ]
        ]
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
      fill={[
        {
          match: {
            id: 'ruby'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'c'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'go'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'python'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'scala'
          },
          id: 'lines'
        },
        {
          match: {
            id: 'lisp'
          },
          id: 'lines'
        },
        {
          match: {
            id: 'elixir'
          },
          id: 'lines'
        },
        {
          match: {
            id: 'javascript'
          },
          id: 'lines'
        }
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 50,
          itemsSpacing: 20,
          itemWidth: 70,
          itemHeight: 28,
          itemTextColor: 'var(--chart-color)',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 14,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
            }
          ]
        }
      ]}
    />
  </div>
}