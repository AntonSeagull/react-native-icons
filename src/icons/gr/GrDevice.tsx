

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrDevice = (props: IconProps) => {

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
          <Path d="M2,7 L22,7 L22,21 L16,21 L12,17 L8,21 L2,21 L2,7 Z M6,2 L11,7 L12,7 L13,7 L18,2" fill="none" />
        </G>
      </Svg>
    );
  }

