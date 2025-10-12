

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMultiplier05x = (props: IconProps) => {

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
          <Path  d="M8 16h2a2 2 0 1 0 0 -4h-2v-4h4" />
          <Path  d="M5 16v.01" />
          <Path  d="M15 16l4 -4" />
          <Path  d="M19 16l-4 -4" />
        </G>
      </Svg>
    );
  }

