

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrLocal = (props: IconProps) => {

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
          <Path d="M1,4 L23,4 L23,20 L1,20 L1,4 Z M11,8 L23,8 M1,16 L23,16 M1,12 L23,12 M11,4 L11,12" fill="none" />
        </G>
      </Svg>
    );
  }

