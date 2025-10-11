

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFlagCog = (props: IconProps) => {

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
          <Path  d="M12.901 14.702a5.014 5.014 0 0 1 -.901 -.702a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v6.5" />
          <Path  d="M5 21v-7" />
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

