

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLockCheck = (props: IconProps) => {

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
          <Path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v.5" />
          <Path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <Path d="M8 11v-4a4 4 0 1 1 8 0v4" />
          <Path d="M15 19l2 2l4 -4" />
        </G>
      </Svg>
    );
  }

