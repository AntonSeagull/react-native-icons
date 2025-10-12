

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAlignCenterHorizontalThin = (props: IconProps) => {

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
          <Path  d="M208,140H132V116h52a12,12,0,0,0,12-12V64a12,12,0,0,0-12-12H132V32a4,4,0,0,0-8,0V52H72A12,12,0,0,0,60,64v40a12,12,0,0,0,12,12h52v24H48a12,12,0,0,0-12,12v40a12,12,0,0,0,12,12h76v20a4,4,0,0,0,8,0V204h76a12,12,0,0,0,12-12V152A12,12,0,0,0,208,140ZM68,104V64a4,4,0,0,1,4-4H184a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H72A4,4,0,0,1,68,104Zm144,88a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z" />
        </G>
      </Svg>
    );
  }

