

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiHighDefinitionThin = (props: IconProps) => {

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
          <Path  d="M176,76H152a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4h24a52,52,0,0,0,0-104Zm0,96H156V84h20a44,44,0,0,1,0,88Zm-60,4V132H52v44a4,4,0,0,1-8,0V80a4,4,0,0,1,8,0v44h64V80a4,4,0,0,1,8,0v96a4,4,0,0,1-8,0ZM28,48a4,4,0,0,1,4-4H224a4,4,0,0,1,0,8H32A4,4,0,0,1,28,48ZM228,208a4,4,0,0,1-4,4H32a4,4,0,0,1,0-8H224A4,4,0,0,1,228,208Z" />
        </G>
      </Svg>
    );
  }

