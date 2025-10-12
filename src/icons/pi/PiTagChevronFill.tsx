

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTagChevronFill = (props: IconProps) => {

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
          <Path  d="M246.66,132.44,201,200.88A16,16,0,0,1,187.72,208H32a8,8,0,0,1-6.66-12.44L70.39,128l-45-67.56A8,8,0,0,1,32,48H187.72A16,16,0,0,1,201,55.12l45.63,68.44A8,8,0,0,1,246.66,132.44Z" />
        </G>
      </Svg>
    );
  }

