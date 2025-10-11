

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuNavigation2Off = (props: IconProps) => {

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
          <Path d="M9.31 9.31 5 21l7-4 7 4-1.17-3.17" />
          <Path d="M14.53 8.88 12 2l-1.17 3.17" />
        </G>
      </Svg>
    );
  }

