

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPlaceholderDuotone = (props: IconProps) => {

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
          <Path d="M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" />
          <Path d="M224,48a16,16,0,0,0-16-16H48a15.91,15.91,0,0,0-10.66,4.1,9.08,9.08,0,0,0-1.24,1.24A15.91,15.91,0,0,0,32,48V208a16,16,0,0,0,16,16H208a15.91,15.91,0,0,0,10.66-4.1,7.35,7.35,0,0,0,.65-.59,6,6,0,0,0,.58-.65A15.87,15.87,0,0,0,224,208ZM208,196.7,59.31,48H208ZM48,59.31,196.69,208H48Z" />
        </G>
      </Svg>
    );
  }

