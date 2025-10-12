

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuDiameter = (props: IconProps) => {

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
          <Circle  cx="19" cy="19" r="2" />
          <Circle  cx="5" cy="5" r="2" />
          <Path  d="M6.48 3.66a10 10 0 0 1 13.86 13.86" />
          <Path  d="m6.41 6.41 11.18 11.18" />
          <Path  d="M3.66 6.48a10 10 0 0 0 13.86 13.86" />
        </G>
      </Svg>
    );
  }

