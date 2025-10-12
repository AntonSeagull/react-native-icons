

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiGoodreadsLogoLight = (props: IconProps) => {

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
          <Path  d="M184,26a6,6,0,0,0-6,6V51.4A62,62,0,0,0,66,88v24a62,62,0,0,0,112,36.6V168a50.06,50.06,0,0,1-50,50c-17.09,0-34-8.41-43.08-21.43a6,6,0,1,0-9.84,6.86C86.34,219.57,107.11,230,128,230a62.07,62.07,0,0,0,62-62V32A6,6,0,0,0,184,26ZM128,162a50.06,50.06,0,0,1-50-50V88a50,50,0,0,1,100,0v24A50.06,50.06,0,0,1,128,162Z" />
        </G>
      </Svg>
    );
  }

