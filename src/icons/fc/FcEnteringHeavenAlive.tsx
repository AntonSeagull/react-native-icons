

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcEnteringHeavenAlive = (props: IconProps) => {

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
          <Path d="M35,13c-0.4,0-0.8,0-1.2,0.1C32.9,8.5,28.9,5,24,5c-4.1,0-7.6,2.5-9.2,6c-0.3,0-0.5,0-0.8,0 c-4.4,0-8,3.6-8,8s3.6,8,8,8c2.4,0,18.5,0,21,0c3.9,0,7-3.1,7-7C42,16.1,38.9,13,35,13z" fill="#81D4FA" />
          <Path d="M28,21c0-2.2-1.8-4-4-4s-4,1.8-4,4c0,0.5,0,6,0,6h8C28,27,28,21.5,28,21z" fill="#039BE5" />
        </G>
      </Svg>
    );
  }

