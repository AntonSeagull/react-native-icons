

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTextWrapColumn = (props: IconProps) => {

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
          <Path  d="M7 9h7a3 3 0 0 1 0 6h-4l2 -2" />
          <Path  d="M12 17l-2 -2" />
          <Path  d="M3 3v18" />
          <Path  d="M21 3v18" />
        </G>
      </Svg>
    );
  }

