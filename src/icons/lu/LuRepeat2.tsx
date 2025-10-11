

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuRepeat2 = (props: IconProps) => {

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
          <Path d="m2 9 3-3 3 3" />
          <Path d="M13 18H7a2 2 0 0 1-2-2V6" />
          <Path d="m22 15-3 3-3-3" />
          <Path d="M11 6h6a2 2 0 0 1 2 2v10" />
        </G>
      </Svg>
    );
  }

