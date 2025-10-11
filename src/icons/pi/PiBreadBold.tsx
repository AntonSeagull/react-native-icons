

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBreadBold = (props: IconProps) => {

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
          <Path  d="M244,80a44.05,44.05,0,0,0-44-44H48a44,44,0,0,0-20,83.17V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V119.17A44,44,0,0,0,244,80ZM52,123.3A12,12,0,0,0,48,100a20,20,0,0,1,0-40h92a20,20,0,0,1,0,40,12,12,0,0,0-4,23.3V196H52ZM200,100a12,12,0,0,0-4,23.3V196H160V119.17A43.92,43.92,0,0,0,179.17,60H200a20,20,0,0,1,0,40Z" />
        </G>
      </Svg>
    );
  }

