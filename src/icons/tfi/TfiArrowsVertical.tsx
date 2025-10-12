

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiArrowsVertical = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M11.642 12.063l0.716 0.698-3.858 3.955-3.858-3.954 0.716-0.698 2.642 2.707v-12.542l-2.642 2.708-0.716-0.699 3.858-3.954 3.858 3.954-0.716 0.698-2.642-2.707v12.543l2.642-2.709z" />
        </G>
      </Svg>
    );
  }

