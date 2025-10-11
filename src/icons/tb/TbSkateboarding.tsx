

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSkateboarding = (props: IconProps) => {

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
          <Path  d="M16 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <Path  d="M5.5 15h3.5l.75 -1.5" />
          <Path  d="M14 19v-5l-2.5 -3l2.5 -4" />
          <Path  d="M8 8l3 -1h4l1 3h3" />
          <Path  d="M17.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z" fill="currentColor" />
          <Path  d="M3 18c0 .552 .895 1 2 1h14c1.105 0 2 -.448 2 -1" />
          <Path  d="M6.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

