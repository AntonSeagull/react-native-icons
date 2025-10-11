

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandMantine = (props: IconProps) => {

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
          <Path  d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <Path  d="M11 16c1.22 -.912 2 -2.36 2 -4a5.01 5.01 0 0 0 -2 -4" />
          <Path  d="M14 9h-2" />
          <Path  d="M14 15h-2" />
          <Path  d="M10 12h.01" />
        </G>
      </Svg>
    );
  }

