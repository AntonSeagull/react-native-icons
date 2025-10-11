

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCliffJumping = (props: IconProps) => {

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
          <Path  d="M14 7a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path  d="M10.5 18l2.5 2l2 -2" />
          <Path  d="M18 21l3 -3l-4 -2l-1 -5" />
          <Path  d="M10.5 7.5l2 3l3.5 .5l3 -2l.5 -3" />
          <Path  d="M4 21v-1l2 -3l.5 -2.5l1.5 -2.5l-1 -5l1 -3l-1 -1l-2 .5l-2 -.5" />
        </G>
      </Svg>
    );
  }

