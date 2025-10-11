

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscTerminal = (props: IconProps) => {

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
          <Path d="M1.5 3L3 1.5H21L22.5 3V21L21 22.5H3L1.5 21V3ZM3 3V21H21V3H3Z" />
          <Path d="M7.06078 7.49988L6.00012 8.56054L10.2427 12.8032L6 17.0459L7.06066 18.1066L12 13.1673V12.4391L7.06078 7.49988Z" />
        </G>
      </Svg>
    );
  }

