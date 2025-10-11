

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBarricadeThin = (props: IconProps) => {

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
          <Path  d="M224,68H32A12,12,0,0,0,20,80v72a12,12,0,0,0,12,12H60v36a4,4,0,0,0,8,0V164H188v36a4,4,0,0,0,8,0V164h28a12,12,0,0,0,12-12V80A12,12,0,0,0,224,68Zm4,12v58.34L165.66,76H224A4,4,0,0,1,228,80ZM32,76H82.34l80,80H101.66L28,82.34V80A4,4,0,0,1,32,76Zm-4,76V93.66L90.34,156H32A4,4,0,0,1,28,152Zm196,4H173.66l-80-80h60.68L228,149.66V152A4,4,0,0,1,224,156Z" />
        </G>
      </Svg>
    );
  }

