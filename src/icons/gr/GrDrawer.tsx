

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrDrawer = (props: IconProps) => {

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
          <Path d="M1,14 L6,2 L18,2 L23,14 L21,22 L3,22 L1,14 Z M1,14 L23,14" fill="none" />
        </G>
      </Svg>
    );
  }

