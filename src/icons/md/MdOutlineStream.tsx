

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineStream = (props: IconProps) => {

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
          <Circle  cx="20" cy="12" r="2" />
          <Circle  cx="4" cy="12" r="2" />
          <Circle  cx="12" cy="20" r="2" />
          <Circle  cx="12" cy="4" r="2" />
        </G>
      </Svg>
    );
  }

