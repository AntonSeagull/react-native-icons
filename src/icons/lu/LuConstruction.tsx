

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuConstruction = (props: IconProps) => {

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
          <Path  d="M17 14v7" />
          <Path  d="M7 14v7" />
          <Path  d="M17 3v3" />
          <Path  d="M7 3v3" />
          <Path  d="M10 14 2.3 6.3" />
          <Path  d="m14 6 7.7 7.7" />
          <Path  d="m8 6 8 8" />
        </G>
      </Svg>
    );
  }

