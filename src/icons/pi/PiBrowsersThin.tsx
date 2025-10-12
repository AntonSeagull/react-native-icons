

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBrowsersThin = (props: IconProps) => {

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
          <Path  d="M216,44H72A12,12,0,0,0,60,56V76H40A12,12,0,0,0,28,88V200a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12V180h20a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,84H184a4,4,0,0,1,4,4v20H36V88A4,4,0,0,1,40,84ZM188,200a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V116H188Zm32-32a4,4,0,0,1-4,4H196V88a12,12,0,0,0-12-12H68V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4Z" />
        </G>
      </Svg>
    );
  }

