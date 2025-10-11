

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPlayFootball = (props: IconProps) => {

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
          <Path d="M11 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <Path d="M3 17l5 1l.75 -1.5" />
          <Path d="M14 21v-4l-4 -3l1 -6" />
          <Path d="M6 12v-3l5 -1l3 3l3 1" />
          <Path d="M19.5 20a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

