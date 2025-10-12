

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCirclesThreeBold = (props: IconProps) => {

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
          <Path  d="M176,76a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,76Zm-48,24a24,24,0,1,1,24-24A24,24,0,0,1,128,100Zm60,24a48,48,0,1,0,48,48A48.05,48.05,0,0,0,188,124Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,188,196ZM68,124a48,48,0,1,0,48,48A48.05,48.05,0,0,0,68,124Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,68,196Z" />
        </G>
      </Svg>
    );
  }

