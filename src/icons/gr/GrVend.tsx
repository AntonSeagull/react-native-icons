

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrVend = (props: IconProps) => {

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
          <Path  fill="none" d="M3,2.00246167 C3,1.44881738 3.44494629,1 3.99339768,1 L20.0066023,1 C20.5552407,1 21,1.43945834 21,2.00246167 L21,23 L3,23 L3,2.00246167 Z M15,1 L15,23 M3,16 L15,16 M8,17 L10,17 M7,16 L7,12 M7,9 L7,5 M11,16 L11,12 M11,9 L11,5 M17,12 L18,12 M17,9 L19,8.99999994 M17,20 L19,19.9999999 M3,9 L15,9" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

