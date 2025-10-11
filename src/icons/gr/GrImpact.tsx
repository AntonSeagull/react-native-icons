

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrImpact = (props: IconProps) => {

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
          <Path  fill="none" d="M13,2 L22,6 L22,17 L13,22 L13,2 Z M22,6 L13,11 L22,6 Z M9,22 L9,2 L9,22 Z M9,12 L3,5 L9,12 Z M9,12 L1,12 L9,12 Z M9,12 L3,19 L9,12 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

