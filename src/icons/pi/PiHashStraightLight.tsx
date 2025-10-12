

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiHashStraightLight = (props: IconProps) => {

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
          <Path  d="M216,154H166V102h50a6,6,0,0,0,0-12H166V40a6,6,0,0,0-12,0V90H102V40a6,6,0,0,0-12,0V90H40a6,6,0,0,0,0,12H90v52H40a6,6,0,0,0,0,12H90v50a6,6,0,0,0,12,0V166h52v50a6,6,0,0,0,12,0V166h50a6,6,0,0,0,0-12Zm-114,0V102h52v52Z" />
        </G>
      </Svg>
    );
  }

