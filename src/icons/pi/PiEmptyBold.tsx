

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiEmptyBold = (props: IconProps) => {

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
          <Path  d="M203.63,62.65l13.25-14.58a12,12,0,0,0-17.76-16.14L185.88,46.49A100,100,0,0,0,52.37,193.35L39.12,207.93a12,12,0,1,0,17.76,16.14l13.24-14.56A100,100,0,0,0,203.63,62.65ZM52,128A75.94,75.94,0,0,1,169.58,64.43l-100.91,111A75.6,75.6,0,0,1,52,128Zm76,76a75.52,75.52,0,0,1-41.58-12.43l100.91-111A75.94,75.94,0,0,1,128,204Z" />
        </G>
      </Svg>
    );
  }

