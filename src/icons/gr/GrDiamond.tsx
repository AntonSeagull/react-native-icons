

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrDiamond = (props: IconProps) => {

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
          <Path d="M6,3 L18,3 L22,9 L12,21 L2,9 L6,3 Z M2,9 L22,9 M11,3 L7,9 L12,20 M13,3 L17,9 L12,20" fill="none" />
        </G>
      </Svg>
    );
  }

