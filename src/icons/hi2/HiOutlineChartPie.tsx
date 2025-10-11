

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const HiOutlineChartPie = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" strokeLinecap="round" strokeLinejoin="round" />
          <Path  d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" strokeLinecap="round" strokeLinejoin="round" />
        </G>
      </Svg>
    );
  }

