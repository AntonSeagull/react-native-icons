

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrTasks = (props: IconProps) => {

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
          <Path d="M1,3 L23,3 L23,7 L1,7 L1,3 Z M1,10 L23,10 L23,14 L1,14 L1,10 Z M1,17 L23,17 L23,21 L1,21 L1,17 Z M1,4 L16,4 L16,6 L1,6 L1,4 Z M1,11 L6,11 L6,13 L1,13 L1,11 Z M1,18 L11,18 L11,20 L1,20 L1,18 Z" fill="none" />
        </G>
      </Svg>
    );
  }

