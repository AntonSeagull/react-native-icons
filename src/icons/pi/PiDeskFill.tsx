

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiDeskFill = (props: IconProps) => {

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
          <Path  d="M248,64H8A8,8,0,0,0,8,80h8V192a8,8,0,0,0,16,0V144H224v48a8,8,0,0,0,16,0V80h8a8,8,0,0,0,0-16ZM80,112H56a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm56,8a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm64-8H176a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Z" />
        </G>
      </Svg>
    );
  }

