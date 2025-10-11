

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMoodPlus = (props: IconProps) => {

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
          <Path d="M20.985 12.528a9 9 0 1 0 -8.45 8.456" />
          <Path d="M16 19h6" />
          <Path d="M19 16v6" />
          <Path d="M9 10h.01" />
          <Path d="M15 10h.01" />
          <Path d="M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1" />
        </G>
      </Svg>
    );
  }

