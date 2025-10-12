

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiGoodreadsLogoThin = (props: IconProps) => {

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
          <Path  d="M184,28a4,4,0,0,0-4,4V58.13A60,60,0,0,0,68,88v24a60,60,0,0,0,112,29.87V168a52.06,52.06,0,0,1-52,52c-17.72,0-35.28-8.75-44.72-22.29a4,4,0,0,0-6.56,4.58C87.61,217.91,107.74,228,128,228a60.07,60.07,0,0,0,60-60V32A4,4,0,0,0,184,28ZM128,164a52.06,52.06,0,0,1-52-52V88a52,52,0,0,1,104,0v24A52.06,52.06,0,0,1,128,164Z" />
        </G>
      </Svg>
    );
  }

