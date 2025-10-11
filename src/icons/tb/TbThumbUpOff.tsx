

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbThumbUpOff = (props: IconProps) => {

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
          <Path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a3.987 3.987 0 0 0 2.828 -1.172m1.172 -2.828v-1a2 2 0 1 1 4 0v5h3a2 2 0 0 1 2 2c-.222 1.112 -.39 1.947 -.5 2.503m-.758 3.244c-.392 .823 -1.044 1.312 -1.742 1.253h-7a3 3 0 0 1 -3 -3" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

