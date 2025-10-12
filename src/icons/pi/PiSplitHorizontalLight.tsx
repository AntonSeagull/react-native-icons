

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSplitHorizontalLight = (props: IconProps) => {

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
          <Path  d="M110,48V208a6,6,0,0,1-12,0V134H38.49l21.75,21.76a6,6,0,1,1-8.48,8.48l-32-32a6,6,0,0,1,0-8.48l32-32a6,6,0,0,1,8.48,8.48L38.49,122H98V48a6,6,0,0,1,12,0Zm126.24,75.76-32-32a6,6,0,0,0-8.48,8.48L217.51,122H158V48a6,6,0,0,0-12,0V208a6,6,0,0,0,12,0V134h59.51l-21.75,21.76a6,6,0,1,0,8.48,8.48l32-32A6,6,0,0,0,236.24,123.76Z" />
        </G>
      </Svg>
    );
  }

