

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuIdCard = (props: IconProps) => {

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
          <Path d="M16 10h2" />
          <Path d="M16 14h2" />
          <Path d="M6.17 15a3 3 0 0 1 5.66 0" />
        </G>
      </Svg>
    );
  }

