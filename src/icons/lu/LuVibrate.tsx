

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuVibrate = (props: IconProps) => {

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
          <Path d="m2 8 2 2-2 2 2 2-2 2" />
          <Path d="m22 8-2 2 2 2-2 2 2 2" />
        </G>
      </Svg>
    );
  }

