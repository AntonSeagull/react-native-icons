

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbNetwork = (props: IconProps) => {

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
          <Path  d="M6 9a6 6 0 1 0 12 0a6 6 0 0 0 -12 0" />
          <Path  d="M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6" />
          <Path  d="M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6" />
          <Path  d="M6 9h12" />
          <Path  d="M3 20h7" />
          <Path  d="M14 20h7" />
          <Path  d="M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path  d="M12 15v3" />
        </G>
      </Svg>
    );
  }

