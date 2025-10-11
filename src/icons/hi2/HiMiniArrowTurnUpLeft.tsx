

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const HiMiniArrowTurnUpLeft = (props: IconProps) => {

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
          <Path d="M16.25 17a.75.75 0 0 1-.75-.75v-7.5H4.56l1.97 1.97a.75.75 0 1 1-1.06 1.06L2.22 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 1.06L4.56 7.25h11.69A.75.75 0 0 1 17 8v8.25a.75.75 0 0 1-.75.75Z" />
        </G>
      </Svg>
    );
  }

