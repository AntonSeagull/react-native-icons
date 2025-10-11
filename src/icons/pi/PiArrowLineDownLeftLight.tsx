

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowLineDownLeftLight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M230,48a6,6,0,0,1-6,6H48a6,6,0,0,1,0-12H224A6,6,0,0,1,230,48ZM179.76,91.76,78,193.52V112a6,6,0,0,0-12,0v96a6,6,0,0,0,6,6h96a6,6,0,0,0,0-12H86.48L188.24,100.24a6,6,0,0,0-8.48-8.48Z" />
        </G>
      </Svg>
    );
  }

