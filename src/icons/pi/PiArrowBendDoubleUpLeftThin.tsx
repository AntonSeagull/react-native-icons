

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowBendDoubleUpLeftThin = (props: IconProps) => {

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
          <Path d="M82.83,149.17a4,4,0,0,1-5.66,5.66l-48-48a4,4,0,0,1,0-5.66l48-48a4,4,0,0,1,5.66,5.66L37.66,104ZM128,100H89.66l41.17-41.17a4,4,0,0,0-5.66-5.66l-48,48a4,4,0,0,0,0,5.66l48,48a4,4,0,0,0,5.66-5.66L89.66,108H128a92.1,92.1,0,0,1,92,92,4,4,0,0,0,8,0A100.11,100.11,0,0,0,128,100Z" />
        </G>
      </Svg>
    );
  }

