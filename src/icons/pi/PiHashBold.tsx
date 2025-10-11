

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiHashBold = (props: IconProps) => {

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
          <Path  d="M224,84H180.2l7.61-41.85a12,12,0,0,0-23.62-4.3L155.8,84H116.2l7.61-41.85a12,12,0,1,0-23.62-4.3L91.8,84H48a12,12,0,0,0,0,24H87.44l-7.27,40H32a12,12,0,0,0,0,24H75.8l-7.61,41.85a12,12,0,0,0,9.66,14A11.43,11.43,0,0,0,80,228a12,12,0,0,0,11.8-9.86L100.2,172h39.6l-7.61,41.85a12,12,0,0,0,9.66,14,11.43,11.43,0,0,0,2.16.2,12,12,0,0,0,11.8-9.86L164.2,172H208a12,12,0,0,0,0-24H168.56l7.27-40H224a12,12,0,0,0,0-24Zm-79.83,64H104.56l7.27-40h39.61Z" />
        </G>
      </Svg>
    );
  }

