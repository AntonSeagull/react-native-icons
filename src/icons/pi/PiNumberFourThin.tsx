

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumberFourThin = (props: IconProps) => {

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
          <Path  d="M184,164H164V48a4,4,0,0,0-7.12-2.5l-96,120A4,4,0,0,0,64,172h92v36a4,4,0,0,0,8,0V172h20a4,4,0,0,0,0-8Zm-28,0H72.32L156,59.4Z" />
        </G>
      </Svg>
    );
  }

