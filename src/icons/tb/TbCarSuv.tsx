

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCarSuv = (props: IconProps) => {

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
          <Path  d="M5 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path  d="M16 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path  d="M5 9l2 -4h7.438a2 2 0 0 1 1.94 1.515l.622 2.485h3a2 2 0 0 1 2 2v3" />
          <Path  d="M10 9v-4" />
          <Path  d="M2 7v4" />
          <Path  d="M22.001 14.001a4.992 4.992 0 0 0 -4.001 -2.001a4.992 4.992 0 0 0 -4 2h-3a4.998 4.998 0 0 0 -8.003 .003" />
          <Path  d="M5 12v-3h13" />
        </G>
      </Svg>
    );
  }

