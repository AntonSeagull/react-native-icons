

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiJoystickFill = (props: IconProps) => {

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
          <Path  d="M224,160v48a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V160a16,16,0,0,1,16-16h72V95.19a40,40,0,1,1,16,0V144h72A16,16,0,0,1,224,160Zm-64-40a8,8,0,0,0,8,8h32a8,8,0,0,0,0-16H168A8,8,0,0,0,160,120Z" />
        </G>
      </Svg>
    );
  }

