

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrMailOption = (props: IconProps) => {

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
          <Path d="M1,4 L23,4 L23,20 L1,20 L1,4 Z M1,5 L12,13.5 L23,5" fill="none" />
        </G>
      </Svg>
    );
  }

