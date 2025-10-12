

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSatelliteDish = (props: IconProps) => {

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
          <Path  d="M4 10a7.31 7.31 0 0 0 10 10Z" />
          <Path  d="m9 15 3-3" />
          <Path  d="M17 13a6 6 0 0 0-6-6" />
          <Path  d="M21 13A10 10 0 0 0 11 3" />
        </G>
      </Svg>
    );
  }

