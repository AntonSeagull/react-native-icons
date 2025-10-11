

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowUUpRightThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M173.17,133.17,214.34,92H88a52,52,0,0,0,0,104h88a4,4,0,0,1,0,8H88A60,60,0,0,1,88,84H214.34L173.17,42.83a4,4,0,0,1,5.66-5.66l48,48a4,4,0,0,1,0,5.66l-48,48a4,4,0,0,1-5.66-5.66Z" />
        </G>
      </Svg>
    );
  }

