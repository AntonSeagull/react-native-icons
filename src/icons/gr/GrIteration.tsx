

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrIteration = (props: IconProps) => {

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
          <Path d="M1,9 L1,23 L15,23 M5,5 L5,19 L19,19 M9,15 L23,15 L23,1 L9,1 L9,15 L9,15 L9,15 Z" fill="none" />
        </G>
      </Svg>
    );
  }

