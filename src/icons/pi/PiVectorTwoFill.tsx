

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiVectorTwoFill = (props: IconProps) => {

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
          <Path d="M229.66,197.66l-32,32A8,8,0,0,1,184,224V200H80a8,8,0,0,1-8-8V80H48a8,8,0,0,1-5.66-13.66l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,112,80H88V184h96V160a8,8,0,0,1,13.66-5.66l32,32A8,8,0,0,1,229.66,197.66Z" />
        </G>
      </Svg>
    );
  }

