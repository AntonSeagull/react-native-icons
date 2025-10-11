

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPhotoCog = (props: IconProps) => {

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
          <Path  d="M15 8h.01" />
          <Path  d="M12 21h-6a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6" />
          <Path  d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3 3" />
          <Path  d="M14 14l1 -1c.48 -.461 1.016 -.684 1.551 -.67" />
          <Path  d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path  d="M19.001 15.5v1.5" />
          <Path  d="M19.001 21v1.5" />
          <Path  d="M22.032 17.25l-1.299 .75" />
          <Path  d="M17.27 20l-1.3 .75" />
          <Path  d="M15.97 17.25l1.3 .75" />
          <Path  d="M20.733 20l1.3 .75" />
        </G>
      </Svg>
    );
  }

