

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrMultimedia = (props: IconProps) => {

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
          <Path d="M2,8 L2,22 L22,22 L22,9 M11,4 L7,8 M2,4 L2,8 L17,8 L21,4 L2,4 Z M16,4 L12,8" fill="none" />
        </G>
      </Svg>
    );
  }

