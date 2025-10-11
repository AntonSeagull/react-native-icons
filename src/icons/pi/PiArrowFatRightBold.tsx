

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowFatRightBold = (props: IconProps) => {

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
          <Path  d="M240.49,119.51l-96-96A12,12,0,0,0,124,32V68H48A20,20,0,0,0,28,88v80a20,20,0,0,0,20,20h76v36a12,12,0,0,0,20.49,8.49l96-96A12,12,0,0,0,240.49,119.51ZM148,195V176a12,12,0,0,0-12-12H52V92h84a12,12,0,0,0,12-12V61l67,67Z" />
        </G>
      </Svg>
    );
  }

