

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPencilRulerBold = (props: IconProps) => {

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
          <Path  d="M208,28H160a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H164V180h16a12,12,0,0,0,0-24H164V140h16a12,12,0,0,0,0-24H164V100h16a12,12,0,0,0,0-24H164V52h40ZM80.49,23.51a12,12,0,0,0-17,0l-32,32A12,12,0,0,0,28,64V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V64a12,12,0,0,0-3.51-8.49ZM52,92H92v72H52ZM72,49,91,68H53ZM52,204V188H92v16Z" />
        </G>
      </Svg>
    );
  }

