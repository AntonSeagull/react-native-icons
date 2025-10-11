

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTreeEvergreenLight = (props: IconProps) => {

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
          <Path  d="M228.74,188.32,180.27,126H208a6,6,0,0,0,4.76-9.66l-80-104a6,6,0,0,0-9.52,0l-80,104A6,6,0,0,0,48,126H75.73L27.26,188.32A6,6,0,0,0,32,198h90v42a6,6,0,0,0,12,0V198h90a6,6,0,0,0,4.74-9.68ZM44.27,186l48.47-62.32A6,6,0,0,0,88,114H60.19L128,25.84,195.81,114H168a6,6,0,0,0-4.74,9.68L211.73,186Z" />
        </G>
      </Svg>
    );
  }

