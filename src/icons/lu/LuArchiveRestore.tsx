

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuArchiveRestore = (props: IconProps) => {

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
          <Path  d="M4 8v11a2 2 0 0 0 2 2h2" />
          <Path  d="M20 8v11a2 2 0 0 1-2 2h-2" />
          <Path  d="m9 15 3-3 3 3" />
          <Path  d="M12 12v9" />
        </G>
      </Svg>
    );
  }

