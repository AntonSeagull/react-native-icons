

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRobotFace = (props: IconProps) => {

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
          <Path d="M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2z" />
          <Path d="M9 16c1 .667 2 1 3 1s2 -.333 3 -1" />
          <Path d="M9 7l-1 -4" />
          <Path d="M15 7l1 -4" />
          <Path d="M9 12v-1" />
          <Path d="M15 12v-1" />
        </G>
      </Svg>
    );
  }

