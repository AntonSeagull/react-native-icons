

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrCli = (props: IconProps) => {

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
          <Path d="M1,1 L23,1 L23,23 L1,23 L1,1 Z M1,5 L23,5 M5,1 L5,5 M11,16 L19,16 M5,10 L8,13 L5,16" fill="none" />
        </G>
      </Svg>
    );
  }

