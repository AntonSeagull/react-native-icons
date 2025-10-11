

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const HiMiniArrowTurnLeftUp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 20 20"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M16 16.25a.75.75 0 0 0-.75-.75h-7.5V4.56l1.97 1.97a.75.75 0 1 0 1.06-1.06L7.53 2.22a.75.75 0 0 0-1.06 0L3.22 5.47a.75.75 0 0 0 1.06 1.06l1.97-1.97v11.69c0 .414.336.75.75.75h8.25a.75.75 0 0 0 .75-.75Z" />
        </G>
      </Svg>
    );
  }

