

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandCodepen = (props: IconProps) => {

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
          <Path  d="M3 15l9 6l9 -6l-9 -6l-9 6" />
          <Path  d="M3 9l9 6l9 -6l-9 -6l-9 6" />
          <Path  d="M3 9l0 6" />
          <Path  d="M21 9l0 6" />
          <Path  d="M12 3l0 6" />
          <Path  d="M12 15l0 6" />
        </G>
      </Svg>
    );
  }

