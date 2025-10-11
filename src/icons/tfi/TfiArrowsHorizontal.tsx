

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiArrowsHorizontal = (props: IconProps) => {

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
          <Path  d="M16.716 8.5l-3.954 3.858-0.698-0.716 2.707-2.642h-12.542l2.708 2.642-0.698 0.716-3.955-3.858 3.954-3.858 0.698 0.716-2.707 2.642h12.543l-2.708-2.642 0.698-0.716 3.954 3.858z" />
        </G>
      </Svg>
    );
  }

