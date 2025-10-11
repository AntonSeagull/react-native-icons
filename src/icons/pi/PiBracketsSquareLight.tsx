

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBracketsSquareLight = (props: IconProps) => {

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
          <Path  d="M46,46V210H80a6,6,0,0,1,0,12H40a6,6,0,0,1-6-6V40a6,6,0,0,1,6-6H80a6,6,0,0,1,0,12ZM216,34H176a6,6,0,0,0,0,12h34V210H176a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34Z" />
        </G>
      </Svg>
    );
  }

