

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineDeblur = (props: IconProps) => {

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
          <Circle  cx="6" cy="14" r="1" />
          <Circle  cx="6" cy="18" r="1" />
          <Circle  cx="6" cy="10" r="1" />
          <Circle  cx="3" cy="10" r=".5" />
          <Circle  cx="6" cy="6" r="1" />
          <Circle  cx="3" cy="14" r=".5" />
          <Circle  cx="10" cy="21" r=".5" />
          <Circle  cx="10" cy="3" r=".5" />
          <Circle  cx="10" cy="6" r="1" />
          <Circle  cx="10" cy="14" r="1.5" />
          <Circle  cx="10" cy="10" r="1.5" />
          <Circle  cx="10" cy="18" r="1" />
          <Path  d="M12,3v2c3.86,0,7,3.14,7,7s-3.14,7-7,7v2c4.96,0,9-4.04,9-9S16.96,3,12,3z" />
        </G>
      </Svg>
    );
  }

