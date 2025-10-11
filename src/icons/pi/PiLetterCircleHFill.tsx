

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiLetterCircleHFill = (props: IconProps) => {

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
          <Path  d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,144a8,8,0,0,1-16,0V136H104v32a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0v32h48V88a8,8,0,0,1,16,0Z" />
        </G>
      </Svg>
    );
  }

