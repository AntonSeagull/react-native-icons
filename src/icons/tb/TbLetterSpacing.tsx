

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLetterSpacing = (props: IconProps) => {

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
          <Path  d="M5 12v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5" />
          <Path  d="M13 4l3 8l3 -8" />
          <Path  d="M5 18h14" />
          <Path  d="M17 20l2 -2l-2 -2" />
          <Path  d="M7 16l-2 2l2 2" />
        </G>
      </Svg>
    );
  }

