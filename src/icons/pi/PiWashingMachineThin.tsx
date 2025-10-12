

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiWashingMachineThin = (props: IconProps) => {

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
          <Path  d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM128,68a60,60,0,1,0,60,60A60.07,60.07,0,0,0,128,68Zm0,112a52,52,0,1,1,52-52A52.06,52.06,0,0,1,128,180ZM196,68a8,8,0,1,1-8-8A8,8,0,0,1,196,68Zm-73.17,46.83-16,16a4,4,0,0,1-5.66-5.66l16-16a4,4,0,0,1,5.66,5.66Zm32,2.34a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66-5.66l32-32A4,4,0,0,1,154.83,117.17Z" />
        </G>
      </Svg>
    );
  }

