

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandAndroid = (props: IconProps) => {

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
          <Path  d="M4 10l0 6" />
          <Path  d="M20 10l0 6" />
          <Path  d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" />
          <Path  d="M8 3l1 2" />
          <Path  d="M16 3l-1 2" />
          <Path  d="M9 18l0 3" />
          <Path  d="M15 18l0 3" />
        </G>
      </Svg>
    );
  }

