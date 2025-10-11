

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrCode = (props: IconProps) => {

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
          <Path d="M9,22 L15,2 M17,17 L22,12 L17,7 M7,17 L2,12 L7,7" fill="none" />
        </G>
      </Svg>
    );
  }

