

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAngleBold = (props: IconProps) => {

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
          <Path  d="M252,200a12,12,0,0,1-12,12H72a12,12,0,0,1-12-12V84H32a12,12,0,0,1,0-24H60V32a12,12,0,0,1,24,0V188H240A12,12,0,0,1,252,200ZM111,84.29a84,84,0,0,1,76.7,76.7,12,12,0,0,0,11.95,11c.33,0,.66,0,1,0a12,12,0,0,0,11-13A108,108,0,0,0,113,60.37a12,12,0,1,0-2,23.92Z" />
        </G>
      </Svg>
    );
  }

