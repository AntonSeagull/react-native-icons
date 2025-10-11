

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcBiomass = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M32,15V7H16v8L6.2,40c-0.6,1.5,0.5,3,2.1,3h31.5c1.6,0,2.6-1.6,2.1-3L32,15z" fill="#9CCC65" />
          <Path d="M32,9H16c-1.1,0-2-0.9-2-2v0c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2v0C34,8.1,33.1,9,32,9z" fill="#8BC34A" />
          <Path d="M28,30c0,4.4-4,8-4,8s-4-3.6-4-8s4-8,4-8S28,25.6,28,30z" fill="#2E7D32" />
          <Path d="M31.1,32.6c-2,4-7.1,5.4-7.1,5.4s-2-5,0-8.9s7.1-5.4,7.1-5.4S33.1,28.6,31.1,32.6z" fill="#388E3C" />
          <Path d="M16.9,32.6c2,4,7.1,5.4,7.1,5.4s2-5,0-8.9s-7.1-5.4-7.1-5.4S14.9,28.6,16.9,32.6z" fill="#43A047" />
        </G>
      </Svg>
    );
  }

