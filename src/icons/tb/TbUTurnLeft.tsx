

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbUTurnLeft = (props: IconProps) => {

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
          <Path d="M17 20v-11.5a4.5 4.5 0 1 0 -9 0v8.5" />
          <Path d="M11 14l-3 3l-3 -3" />
        </G>
      </Svg>
    );
  }

