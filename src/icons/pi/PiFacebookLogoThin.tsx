

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFacebookLogoThin = (props: IconProps) => {

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
          <Path  d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm4,191.91V148h28a4,4,0,0,0,0-8H132V112a20,20,0,0,1,20-20h16a4,4,0,0,0,0-8H152a28,28,0,0,0-28,28v28H96a4,4,0,0,0,0,8h28v71.91a92,92,0,1,1,8,0Z" />
        </G>
      </Svg>
    );
  }

