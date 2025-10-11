

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrVirtualMachine = (props: IconProps) => {

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
          <Path d="M1,23 L14,23 L14,10 L1,10 L1,23 Z M10,19 L23,19 L23,6 L10,6 L10,19 Z M5,14 L18,14 L18,1 L5,1 L5,14 Z" fill="none" />
        </G>
      </Svg>
    );
  }

