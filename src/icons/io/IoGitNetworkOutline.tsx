

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoGitNetworkOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M128,144c0,74.67,68.92,112,128,112" />
          <Path d="M384,144c0,74.67-68.92,112-128,112" />
        </G>
      </Svg>
    );
  }

