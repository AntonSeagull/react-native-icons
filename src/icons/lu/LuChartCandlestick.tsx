

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuChartCandlestick = (props: IconProps) => {

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
          <Path  d="M9 5v4" />
          <Path  d="M9 15v2" />
          <Path  d="M17 3v2" />
          <Path  d="M17 13v3" />
          <Path  d="M3 3v16a2 2 0 0 0 2 2h16" />
        </G>
      </Svg>
    );
  }

