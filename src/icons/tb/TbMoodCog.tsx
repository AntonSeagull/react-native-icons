

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMoodCog = (props: IconProps) => {

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
          <Path d="M21 12a9 9 0 1 0 -8.983 9" />
          <Path d="M18.001 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M18.001 14.5v1.5" />
          <Path d="M18.001 20v1.5" />
          <Path d="M21.032 16.25l-1.299 .75" />
          <Path d="M16.27 19l-1.3 .75" />
          <Path d="M14.97 16.25l1.3 .75" />
          <Path d="M19.733 19l1.3 .75" />
          <Path d="M9 10h.01" />
          <Path d="M15 10h.01" />
          <Path d="M9.5 15c.658 .64 1.56 1 2.5 1" />
        </G>
      </Svg>
    );
  }

