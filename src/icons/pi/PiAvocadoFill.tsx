

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAvocadoFill = (props: IconProps) => {

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
          <Path  d="M211,130.66,181.2,46.47a56,56,0,0,0-106-1.14h0l-29.51,83.5A88,88,0,1,0,211,130.66ZM128,200a40,40,0,1,1,40-40A40,40,0,0,1,128,200Z" />
        </G>
      </Svg>
    );
  }

