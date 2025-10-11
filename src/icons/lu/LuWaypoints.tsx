

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuWaypoints = (props: IconProps) => {

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
          <Path d="m10.2 6.3-3.9 3.9" />
          <Path d="M7 12h10" />
          <Path d="m13.8 17.7 3.9-3.9" />
        </G>
      </Svg>
    );
  }

