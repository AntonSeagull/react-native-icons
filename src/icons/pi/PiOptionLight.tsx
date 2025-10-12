

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiOptionLight = (props: IconProps) => {

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
          <Path  d="M230,192a6,6,0,0,1-6,6H160.94a13.92,13.92,0,0,1-12.52-7.74L96.84,87.11A2,2,0,0,0,95.06,86H32a6,6,0,0,1,0-12H95.06a13.92,13.92,0,0,1,12.52,7.74l51.58,103.15a2,2,0,0,0,1.78,1.11H224A6,6,0,0,1,230,192ZM152,86h72a6,6,0,0,0,0-12H152a6,6,0,0,0,0,12Z" />
        </G>
      </Svg>
    );
  }

