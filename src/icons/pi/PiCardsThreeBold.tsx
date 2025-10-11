

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCardsThreeBold = (props: IconProps) => {

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
          <Path  d="M208,96H48a20,20,0,0,0-20,20v84a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V116A20,20,0,0,0,208,96Zm-4,100H52V120H204ZM44,68A12,12,0,0,1,56,56H200a12,12,0,0,1,0,24H56A12,12,0,0,1,44,68ZM60,28A12,12,0,0,1,72,16H184a12,12,0,0,1,0,24H72A12,12,0,0,1,60,28Z" />
        </G>
      </Svg>
    );
  }

