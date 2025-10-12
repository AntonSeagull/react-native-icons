

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCoins = (props: IconProps) => {

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
          <Circle  cx="8" cy="8" r="6" />
          <Path  d="M18.09 10.37A6 6 0 1 1 10.34 18" />
          <Path  d="M7 6h1v4" />
          <Path  d="m16.71 13.88.7.71-2.82 2.82" />
        </G>
      </Svg>
    );
  }

