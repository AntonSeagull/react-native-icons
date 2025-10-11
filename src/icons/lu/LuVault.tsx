

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuVault = (props: IconProps) => {

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
          <Path d="m7.9 7.9 2.7 2.7" />
          <Path d="m13.4 10.6 2.7-2.7" />
          <Path d="m7.9 16.1 2.7-2.7" />
          <Path d="m13.4 13.4 2.7 2.7" />
        </G>
      </Svg>
    );
  }

