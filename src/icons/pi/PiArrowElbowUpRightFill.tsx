

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowElbowUpRightFill = (props: IconProps) => {

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
          <Path d="M221.66,85.66l-48,48A8,8,0,0,1,160,128V88H80V224a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8h88V32a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,221.66,85.66Z" />
        </G>
      </Svg>
    );
  }

