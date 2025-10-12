

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTextHFiveFill = (props: IconProps) => {

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
          <Path  d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,160a8,8,0,0,1-16,0V128H72v32a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0v32h40V80a8,8,0,0,1,16,0Zm40-40a32,32,0,1,1-21.34,55.85,8,8,0,0,1,10.67-11.92,16,16,0,1,0,0-24,8,8,0,0,1-13.17-7.61l8-38A8,8,0,0,1,160,88h32a8,8,0,0,1,0,16H166.49L163,120.37A34.08,34.08,0,0,1,168,120Z" />
        </G>
      </Svg>
    );
  }

