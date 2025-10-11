

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowLineUpLeftBold = (props: IconProps) => {

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
          <Path  d="M236,208a12,12,0,0,1-12,12H48a12,12,0,0,1,0-24H224A12,12,0,0,1,236,208ZM72,156a12,12,0,0,0,12-12V77l91.51,91.52a12,12,0,0,0,17-17L101,60h67a12,12,0,0,0,0-24H72A12,12,0,0,0,60,48v96A12,12,0,0,0,72,156Z" />
        </G>
      </Svg>
    );
  }

