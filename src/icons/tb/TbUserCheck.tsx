

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbUserCheck = (props: IconProps) => {

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
          <Path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
          <Path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
          <Path d="M15 19l2 2l4 -4" />
        </G>
      </Svg>
    );
  }

