

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBracketsSquareBold = (props: IconProps) => {

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
          <Path  d="M52,52V204H80a12,12,0,0,1,0,24H40a12,12,0,0,1-12-12V40A12,12,0,0,1,40,28H80a12,12,0,0,1,0,24ZM216,28H176a12,12,0,0,0,0,24h28V204H176a12,12,0,0,0,0,24h40a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28Z" />
        </G>
      </Svg>
    );
  }

