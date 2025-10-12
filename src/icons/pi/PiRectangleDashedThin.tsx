

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiRectangleDashedThin = (props: IconProps) => {

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
          <Path  d="M76,48a4,4,0,0,1-4,4H40a4,4,0,0,0-4,4V72a4,4,0,0,1-8,0V56A12,12,0,0,1,40,44H72A4,4,0,0,1,76,48ZM32,148a4,4,0,0,0,4-4V112a4,4,0,0,0-8,0v32A4,4,0,0,0,32,148Zm40,56H40a4,4,0,0,1-4-4V184a4,4,0,0,0-8,0v16a12,12,0,0,0,12,12H72a4,4,0,0,0,0-8Zm72,0H112a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8Zm80-24a4,4,0,0,0-4,4v16a4,4,0,0,1-4,4H184a4,4,0,0,0,0,8h32a12,12,0,0,0,12-12V184A4,4,0,0,0,224,180Zm0-72a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V112A4,4,0,0,0,224,108Zm-8-64H184a4,4,0,0,0,0,8h32a4,4,0,0,1,4,4V72a4,4,0,0,0,8,0V56A12,12,0,0,0,216,44Zm-72,0H112a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8Z" />
        </G>
      </Svg>
    );
  }

