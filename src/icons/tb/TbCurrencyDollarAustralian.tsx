

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyDollarAustralian = (props: IconProps) => {

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
          <Path  d="M3 18l3.279 -11.476a.75 .75 0 0 1 1.442 0l3.279 11.476" />
          <Path  d="M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4" />
          <Path  d="M17 20v-2" />
          <Path  d="M18 6v-2" />
          <Path  d="M4.5 14h5" />
        </G>
      </Svg>
    );
  }

