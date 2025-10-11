

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBubbleTea = (props: IconProps) => {

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
          <Path  d="M17.95 9l-1.478 8.69c-.25 1.463 -.374 2.195 -.936 2.631c-1.2 .931 -6.039 .88 -7.172 0c-.562 -.436 -.687 -1.168 -.936 -2.632l-1.478 -8.689" />
          <Path  d="M6 9l.514 -1.286a5.908 5.908 0 0 1 10.972 0l.514 1.286" />
          <Path  d="M5 9h14" />
          <Path  d="M12 9l4 -7" />
          <Path  d="M10.01 14h.01" />
          <Path  d="M11.02 18h.01" />
          <Path  d="M13.02 16h.01" />
        </G>
      </Svg>
    );
  }

