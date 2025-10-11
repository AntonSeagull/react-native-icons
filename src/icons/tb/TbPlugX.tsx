

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPlugX = (props: IconProps) => {

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
          <Path  d="M13.55 17.733a5.806 5.806 0 0 1 -7.356 -4.052a5.81 5.81 0 0 1 1.537 -5.627l2.054 -2.054l7.165 7.165" />
          <Path  d="M4 20l3.5 -3.5" />
          <Path  d="M15 4l-3.5 3.5" />
          <Path  d="M20 9l-3.5 3.5" />
          <Path  d="M16 16l4 4" />
          <Path  d="M20 16l-4 4" />
        </G>
      </Svg>
    );
  }

