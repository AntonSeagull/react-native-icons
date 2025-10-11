

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrSemantics = (props: IconProps) => {

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
          <Path  fill="none" d="M2,17 L12,12 L22,17 L22,21 L12,16 L2,21 L2,17 Z M2,8 L12,3 L22,8 L22,12 L12,7 L2,12 L2,8 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

