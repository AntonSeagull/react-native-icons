

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowBendDoubleUpRightThin = (props: IconProps) => {

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
          <Path  d="M226.83,106.83l-48,48a4,4,0,0,1-5.66-5.66L218.34,104,173.17,58.83a4,4,0,0,1,5.66-5.66l48,48A4,4,0,0,1,226.83,106.83Zm-48-5.66-48-48a4,4,0,1,0-5.66,5.66L166.34,100H128A100.11,100.11,0,0,0,28,200a4,4,0,0,0,8,0,92.1,92.1,0,0,1,92-92h38.34l-41.17,41.17a4,4,0,0,0,5.66,5.66l48-48A4,4,0,0,0,178.83,101.17Z" />
        </G>
      </Svg>
    );
  }

