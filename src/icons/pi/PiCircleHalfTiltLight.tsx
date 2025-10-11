

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCircleHalfTiltLight = (props: IconProps) => {

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
          <Path  d="M200.12,55.88A102,102,0,1,0,55.88,200.13,102,102,0,1,0,200.12,55.88ZM90,209.62a89.61,89.61,0,0,1-21.23-13.89L90,174.49Zm32,8.16a90,90,0,0,1-20-3.58V162.49l20-20Zm32-3.58a89.8,89.8,0,0,1-20,3.58V130.49l20-20Zm32-17.4a89.45,89.45,0,0,1-20,12.83V98.49l20-20ZM60.27,187.24a90,90,0,0,1,127-127ZM198,184.57V71.43a90,90,0,0,1,0,113.14Z" />
        </G>
      </Svg>
    );
  }

