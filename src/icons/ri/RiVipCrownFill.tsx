

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiVipCrownFill = (props: IconProps) => {

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
          <Path d="M2.00488 19H22.0049V21H2.00488V19ZM2.00488 5L7.00488 8L12.0049 2L17.0049 8L22.0049 5V17H2.00488V5Z" />
        </G>
      </Svg>
    );
  }

