

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiStepsLight = (props: IconProps) => {

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
          <Path  d="M246,56a6,6,0,0,1-6,6H190v42a6,6,0,0,1-6,6H134v42a6,6,0,0,1-6,6H78v42a6,6,0,0,1-6,6H16a6,6,0,0,1,0-12H66V152a6,6,0,0,1,6-6h50V104a6,6,0,0,1,6-6h50V56a6,6,0,0,1,6-6h56A6,6,0,0,1,246,56Z" />
        </G>
      </Svg>
    );
  }

