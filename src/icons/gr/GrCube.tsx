

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrCube = (props: IconProps) => {

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
          <Path d="M12,2 L22,7 L22,17 L12,22 L2,17 L2,7 L12,2 Z M2,7 L12,12 L22,7 M12,12 L12,21.9999998 L12,12 Z" fill="none" />
        </G>
      </Svg>
    );
  }

