

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbForms = (props: IconProps) => {

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
          <Path  d="M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3" />
          <Path  d="M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3" />
          <Path  d="M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7" />
          <Path  d="M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1" />
          <Path  d="M17 12h.01" />
          <Path  d="M13 12h.01" />
        </G>
      </Svg>
    );
  }

