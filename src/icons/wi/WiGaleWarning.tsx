

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const WiGaleWarning = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 30 30"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M10.67,24.6V7.45h1.03V24.6H10.67z M12.4,22.44v-7.41l8.65,3.69L12.4,22.44z M12.4,14.86V7.45l8.65,3.69L12.4,14.86z" />
        </G>
      </Svg>
    );
  }

