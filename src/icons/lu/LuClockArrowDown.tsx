

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuClockArrowDown = (props: IconProps) => {

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
          <Path d="M12 6v6l2 1" />
          <Path d="M12.337 21.994a10 10 0 1 1 9.588-8.767" />
          <Path d="m14 18 4 4 4-4" />
          <Path d="M18 14v8" />
        </G>
      </Svg>
    );
  }

