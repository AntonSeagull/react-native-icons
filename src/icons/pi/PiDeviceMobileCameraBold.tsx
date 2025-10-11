

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiDeviceMobileCameraBold = (props: IconProps) => {

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
          <Path d="M176,12H80A28,28,0,0,0,52,40V216a28,28,0,0,0,28,28h96a28,28,0,0,0,28-28V40A28,28,0,0,0,176,12Zm4,204a4,4,0,0,1-4,4H80a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h96a4,4,0,0,1,4,4ZM144,68a16,16,0,1,1-16-16A16,16,0,0,1,144,68Z" />
        </G>
      </Svg>
    );
  }

