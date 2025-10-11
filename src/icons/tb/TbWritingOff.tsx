

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWritingOff = (props: IconProps) => {

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
          <Path  d="M16 7h4" />
          <Path  d="M16 16v1l2 2l.5 -.5m1.5 -2.5v-11c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v7" />
          <Path  d="M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

