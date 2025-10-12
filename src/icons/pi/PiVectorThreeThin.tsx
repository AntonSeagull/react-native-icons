

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiVectorThreeThin = (props: IconProps) => {

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
          <Path  d="M234.83,138.83l-32,32a4,4,0,0,1-5.66-5.66L222.34,140H121.66l-64,64H96a4,4,0,0,1,0,8H48a4,4,0,0,1-4-4V160a4,4,0,0,1,8,0v38.34l64-64V33.66L90.83,58.83a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,0l32,32a4,4,0,0,1-5.66,5.66L124,33.66V132h98.34l-25.17-25.17a4,4,0,0,1,5.66-5.66l32,32A4,4,0,0,1,234.83,138.83Z" />
        </G>
      </Svg>
    );
  }

