

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBezierCurveBold = (props: IconProps) => {

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
          <Path  d="M224.28,141a100.61,100.61,0,0,0-31.4-49H240a12,12,0,0,0,0-24H161.94a36,36,0,0,0-67.88,0H16a12,12,0,0,0,0,24H63.12a100.61,100.61,0,0,0-31.4,49A36,36,0,1,0,56,143.74,76.66,76.66,0,0,1,97.15,98.53a36,36,0,0,0,61.7,0A76.66,76.66,0,0,1,200,143.74,36,36,0,1,0,224.28,141ZM40,188a12,12,0,1,1,12-12A12,12,0,0,1,40,188Zm88-96a12,12,0,1,1,12-12A12,12,0,0,1,128,92Zm88,96a12,12,0,1,1,12-12A12,12,0,0,1,216,188Z" />
        </G>
      </Svg>
    );
  }

