

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuFoldHorizontal = (props: IconProps) => {

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
          <Path  d="M2 12h6" />
          <Path  d="M22 12h-6" />
          <Path  d="M12 2v2" />
          <Path  d="M12 8v2" />
          <Path  d="M12 14v2" />
          <Path  d="M12 20v2" />
          <Path  d="m19 9-3 3 3 3" />
          <Path  d="m5 15 3-3-3-3" />
        </G>
      </Svg>
    );
  }

