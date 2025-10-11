

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiGenderFemaleThin = (props: IconProps) => {

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
          <Path  d="M204,96a76,76,0,1,0-80,75.89V204H88a4,4,0,0,0,0,8h36v28a4,4,0,0,0,8,0V212h36a4,4,0,0,0,0-8H132V171.89A76.09,76.09,0,0,0,204,96ZM60,96a68,68,0,1,1,68,68A68.07,68.07,0,0,1,60,96Z" />
        </G>
      </Svg>
    );
  }

