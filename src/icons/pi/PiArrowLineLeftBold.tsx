

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowLineLeftBold = (props: IconProps) => {

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
          <Path  d="M236,128a12,12,0,0,1-12,12H109l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L109,116H224A12,12,0,0,1,236,128ZM40,28A12,12,0,0,0,28,40V216a12,12,0,0,0,24,0V40A12,12,0,0,0,40,28Z" />
        </G>
      </Svg>
    );
  }

