

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBezierCurveLight = (props: IconProps) => {

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
          <Path  d="M219.44,146.2A94.66,94.66,0,0,0,173.92,86H240a6,6,0,0,0,0-12H157.4a30,30,0,0,0-58.8,0H16a6,6,0,0,0,0,12H82.08a94.66,94.66,0,0,0-45.52,60.2,30,30,0,1,0,12.09,1.08,82.53,82.53,0,0,1,51.4-56.39,30,30,0,0,0,55.9,0,82.53,82.53,0,0,1,51.4,56.39,30,30,0,1,0,12.09-1.08ZM58,176a18,18,0,1,1-18-18A18,18,0,0,1,58,176Zm70-78a18,18,0,1,1,18-18A18,18,0,0,1,128,98Zm88,96a18,18,0,1,1,18-18A18,18,0,0,1,216,194Z" />
        </G>
      </Svg>
    );
  }

