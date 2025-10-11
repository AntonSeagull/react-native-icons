

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCupOff = (props: IconProps) => {

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
          <Path  d="M8 8h-3v3h6m4 0h4v-3h-7" />
          <Path  d="M17.5 11l-.323 2.154m-.525 3.497l-.652 4.349h-8l-1.5 -10" />
          <Path  d="M6 8v-1c0 -.296 .064 -.577 .18 -.83m2.82 -1.17h7a2 2 0 0 1 2 2v1" />
          <Path  d="M15 5v-2" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

