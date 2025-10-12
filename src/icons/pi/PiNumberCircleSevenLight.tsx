

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumberCircleSevenLight = (props: IconProps) => {

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
          <Path  d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM156.91,84.56a6,6,0,0,1,.73,5.49l-32,88A6,6,0,0,1,120,182a6.15,6.15,0,0,1-2-.36,6,6,0,0,1-3.59-7.69L143.43,94H104a6,6,0,0,1,0-12h48A6,6,0,0,1,156.91,84.56Z" />
        </G>
      </Svg>
    );
  }

