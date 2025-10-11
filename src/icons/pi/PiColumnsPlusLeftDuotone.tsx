

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiColumnsPlusLeftDuotone = (props: IconProps) => {

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
          <Path  d="M136,48V208a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h24A8,8,0,0,1,136,48Zm64-8H176a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8h24a8,8,0,0,0,8-8V48A8,8,0,0,0,200,40Z" opacity="0.2" />
          <Path  d="M128,32H104A16,16,0,0,0,88,48V208a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V48A16,16,0,0,0,128,32Zm0,176H104V48h24ZM200,32H176a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H176V48h24ZM72,128a8,8,0,0,1-8,8H48v16a8,8,0,0,1-16,0V136H16a8,8,0,0,1,0-16H32V104a8,8,0,0,1,16,0v16H64A8,8,0,0,1,72,128Z" />
        </G>
      </Svg>
    );
  }

