

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrLayer = (props: IconProps) => {

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
          <Path d="M1,1 L17,1 L17,17 L1,17 L1,1 Z M20,7 L23,7 L23,23 L7,23 L7,20 L7,20" fill="none" />
        </G>
      </Svg>
    );
  }

