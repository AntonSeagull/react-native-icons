

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbInputCheck = (props: IconProps) => {

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
          <Path d="M20 13v-4a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h6" />
          <Path d="M15 19l2 2l4 -4" />
        </G>
      </Svg>
    );
  }

