

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLockAccess = (props: IconProps) => {

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
          <Path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
          <Path d="M4 16v2a2 2 0 0 0 2 2h2" />
          <Path d="M16 4h2a2 2 0 0 1 2 2v2" />
          <Path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
          <Path d="M8 11m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
          <Path d="M10 11v-2a2 2 0 1 1 4 0v2" />
        </G>
      </Svg>
    );
  }

