

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSlideshowThin = (props: IconProps) => {

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
          <Path  d="M192,52H64A12,12,0,0,0,52,64V192a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V64A12,12,0,0,0,192,52Zm4,140a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H192a4,4,0,0,1,4,4ZM236,56V200a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0ZM28,56V200a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0Z" />
        </G>
      </Svg>
    );
  }

