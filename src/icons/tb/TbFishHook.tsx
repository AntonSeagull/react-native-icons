

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFishHook = (props: IconProps) => {

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
          <Path d="M16 9v6a5 5 0 0 1 -10 0v-4l3 3" />
          <Path d="M16 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M16 5v-2" />
        </G>
      </Svg>
    );
  }

