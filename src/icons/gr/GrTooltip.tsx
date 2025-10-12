

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrTooltip = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="none" d="M16.5,18 L12,22.5 L7.5,18 L1,18 L1,1 L23,1 L23,18 L16.5,18 Z M6,10 L7,10 L7,9 L6,9 L6,10 Z M11.5,10 L12.5,10 L12.5,9 L11.5,9 L11.5,10 Z M17,10 L18,10 L18,9 L17,9 L17,10 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

