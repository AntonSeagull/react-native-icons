

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowFatLinesLeftBold = (props: IconProps) => {

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
          <Path  d="M136,68h-4V32a12,12,0,0,0-20.49-8.49l-96,96a12,12,0,0,0,0,17l96,96A12,12,0,0,0,132,224V188h4a12,12,0,0,0,12-12V80A12,12,0,0,0,136,68Zm-12,96h-4a12,12,0,0,0-12,12v19L41,128l67-67V80a12,12,0,0,0,12,12h4ZM228,80v96a12,12,0,0,1-24,0V80a12,12,0,0,1,24,0Zm-40,0v96a12,12,0,0,1-24,0V80a12,12,0,0,1,24,0Z" />
        </G>
      </Svg>
    );
  }

