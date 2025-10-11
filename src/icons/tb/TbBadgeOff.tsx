

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBadgeOff = (props: IconProps) => {

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
          <Path d="M7 7v10l5 3l5 -3m0 -4v-9l-5 3l-2.496 -1.497" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

