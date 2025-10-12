

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTrolleyLight = (props: IconProps) => {

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
          <Path  d="M86,224a14,14,0,1,1-14-14A14,14,0,0,1,86,224Zm130-14a14,14,0,1,0,14,14A14,14,0,0,0,216,210Zm24-32H54V75.31a13.94,13.94,0,0,0-4.1-9.9L28.24,43.76a6,6,0,1,0-8.48,8.48L41.41,73.9A2,2,0,0,1,42,75.31V178H32a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12Z" />
        </G>
      </Svg>
    );
  }

