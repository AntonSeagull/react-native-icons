

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiDeviceMobileThin = (props: IconProps) => {

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
          <Path d="M176,20H80A20,20,0,0,0,60,40V216a20,20,0,0,0,20,20h96a20,20,0,0,0,20-20V40A20,20,0,0,0,176,20ZM68,60H188V196H68ZM80,28h96a12,12,0,0,1,12,12V52H68V40A12,12,0,0,1,80,28Zm96,200H80a12,12,0,0,1-12-12V204H188v12A12,12,0,0,1,176,228Z" />
        </G>
      </Svg>
    );
  }

