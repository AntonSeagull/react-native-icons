

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiRowsFill = (props: IconProps) => {

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
          <Path d="M224,152v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a16,16,0,0,1,16-16H208A16,16,0,0,1,224,152ZM208,48H48A16,16,0,0,0,32,64v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48Z" />
        </G>
      </Svg>
    );
  }

