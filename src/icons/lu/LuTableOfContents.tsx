

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTableOfContents = (props: IconProps) => {

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
          <Path  d="M16 5H3" />
          <Path  d="M16 12H3" />
          <Path  d="M16 19H3" />
          <Path  d="M21 5h.01" />
          <Path  d="M21 12h.01" />
          <Path  d="M21 19h.01" />
        </G>
      </Svg>
    );
  }

