

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuFlipHorizontal = (props: IconProps) => {

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
          <Path  d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" />
          <Path  d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" />
          <Path  d="M12 20v2" />
          <Path  d="M12 14v2" />
          <Path  d="M12 8v2" />
          <Path  d="M12 2v2" />
        </G>
      </Svg>
    );
  }

