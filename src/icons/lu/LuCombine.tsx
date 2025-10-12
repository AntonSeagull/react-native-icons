

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCombine = (props: IconProps) => {

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
          <Path  d="M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" />
          <Path  d="M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" />
          <Path  d="m7 15 3 3" />
          <Path  d="m7 21 3-3H5a2 2 0 0 1-2-2v-2" />
        </G>
      </Svg>
    );
  }

