

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbServerCog = (props: IconProps) => {

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
          <Path  d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
          <Path  d="M12 20h-6a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h10.5" />
          <Path  d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path  d="M18 14.5v1.5" />
          <Path  d="M18 20v1.5" />
          <Path  d="M21.032 16.25l-1.299 .75" />
          <Path  d="M16.27 19l-1.3 .75" />
          <Path  d="M14.97 16.25l1.3 .75" />
          <Path  d="M19.733 19l1.3 .75" />
          <Path  d="M7 8v.01" />
          <Path  d="M7 16v.01" />
        </G>
      </Svg>
    );
  }

