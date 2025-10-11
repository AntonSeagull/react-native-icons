

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrResume = (props: IconProps) => {

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
          <Path d="M1,20 L6,20 L6,4 L1,4 L1,20 Z M11,19.0000002 L22,12 L11,5 L11,19.0000002 Z" fill="none" />
        </G>
      </Svg>
    );
  }

