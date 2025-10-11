

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWebhookOff = (props: IconProps) => {

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
          <Path d="M4.876 13.61a4 4 0 1 0 6.124 3.39h6" />
          <Path d="M15.066 20.502a4 4 0 0 0 4.763 -.675m1.171 -2.827a4 4 0 0 0 -4 -4" />
          <Path d="M16 8a4 4 0 0 0 -6.824 -2.833m-1.176 2.833c0 1.506 .77 2.818 2 3.5l-3 5.5" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

