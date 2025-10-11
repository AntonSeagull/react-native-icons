

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBinaryOff = (props: IconProps) => {

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
          <Path d="M11 7v-2h-1" />
          <Path d="M18 19v-1" />
          <Path d="M15.5 5h2a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-2a.5 .5 0 0 1 -.5 -.5v-4a.5 .5 0 0 1 .5 -.5z" />
          <Path d="M10.5 14h2a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-2a.5 .5 0 0 1 -.5 -.5v-4a.5 .5 0 0 1 .5 -.5z" />
          <Path d="M6 10v.01" />
          <Path d="M6 19v.01" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

