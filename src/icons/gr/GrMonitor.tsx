

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrMonitor = (props: IconProps) => {

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
          <Path d="M1,16 L23,16 L23,2 L1,2 L1,16 Z M5,22 L19,22 L5,22 Z M9,22 L15,22 L15,16 L9,16 L9,22 Z" fill="none" />
        </G>
      </Svg>
    );
  }

