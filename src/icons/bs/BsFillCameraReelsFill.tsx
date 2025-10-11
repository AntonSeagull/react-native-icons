

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BsFillCameraReelsFill = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <Path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          <Path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
        </G>
      </Svg>
    );
  }

