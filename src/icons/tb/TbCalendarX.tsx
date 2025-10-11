

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCalendarX = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M13 21h-7a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6.5" />
          <Path d="M16 3v4" />
          <Path d="M8 3v4" />
          <Path d="M4 11h16" />
          <Path d="M22 22l-5 -5" />
          <Path d="M17 22l5 -5" />
        </G>
      </Svg>
    );
  }

