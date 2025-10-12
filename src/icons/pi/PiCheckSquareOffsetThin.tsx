

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCheckSquareOffsetThin = (props: IconProps) => {

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
          <Path  d="M220,48V208a12,12,0,0,1-12,12H136a4,4,0,0,1,0-8h72a4,4,0,0,0,4-4V48a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4v96a4,4,0,0,1-8,0V48A12,12,0,0,1,48,36H208A12,12,0,0,1,220,48ZM117.17,157.17,64,210.34,42.83,189.17a4,4,0,0,0-5.66,5.66l24,24a4,4,0,0,0,5.66,0l56-56a4,4,0,0,0-5.66-5.66Z" />
        </G>
      </Svg>
    );
  }

