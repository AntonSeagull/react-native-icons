

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrTable = (props: IconProps) => {

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
          <Path d="M8,5 L8,23 M16,5 L16,23 M1,11 L23,11 M1,5 L23,5 M1,17 L23,17 M1,1 L23,1 L23,23 L1,23 L1,1 Z" fill="none" />
        </G>
      </Svg>
    );
  }

