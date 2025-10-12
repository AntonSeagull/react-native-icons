

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCodeSimpleLight = (props: IconProps) => {

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
          <Path  d="M92,68.49,25,128l67,59.52a6,6,0,1,1-8,9l-72-64a6,6,0,0,1,0-9l72-64a6,6,0,0,1,8,9Zm152,55-72-64a6,6,0,0,0-8,9L231,128l-67,59.52a6,6,0,1,0,8,9l72-64a6,6,0,0,0,0-9Z" />
        </G>
      </Svg>
    );
  }

