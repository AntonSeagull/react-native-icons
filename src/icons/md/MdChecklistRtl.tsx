

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdChecklistRtl = (props: IconProps) => {

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
          <Path  d="M11,7H2v2h9V7z M11,15H2v2h9V15z M16.34,11l-3.54-3.54l1.41-1.41l2.12,2.12l4.24-4.24L22,5.34L16.34,11z M16.34,19 l-3.54-3.54l1.41-1.41l2.12,2.12l4.24-4.24L22,13.34L16.34,19z" />
        </G>
      </Svg>
    );
  }

