

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbElevatorOff = (props: IconProps) => {

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
          <Path d="M8 4h10a1 1 0 0 1 1 1v10m0 4a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-14" />
          <Path d="M12 8l2 2" />
          <Path d="M10 14l2 2l2 -2" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

