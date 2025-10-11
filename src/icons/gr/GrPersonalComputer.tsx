

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrPersonalComputer = (props: IconProps) => {

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
          <Path d="M3,18 L21,18 L21,5 L21,5 C21,4.44771525 20.5522847,4 20,4 L4,4 L4,4 C3.44771525,4 3,4.44771525 3,5 L3,18 Z M2,20 L22,20 C23,20 23,19 23,19 L1,19 C1,19 1,20 2,20 Z" fill="none" />
        </G>
      </Svg>
    );
  }

