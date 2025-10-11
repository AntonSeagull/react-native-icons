

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuReplyAll = (props: IconProps) => {

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
          <Path d="m12 17-5-5 5-5" />
          <Path d="M22 18v-2a4 4 0 0 0-4-4H7" />
          <Path d="m7 17-5-5 5-5" />
        </G>
      </Svg>
    );
  }

