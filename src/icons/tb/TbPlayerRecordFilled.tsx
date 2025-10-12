

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPlayerRecordFilled = (props: IconProps) => {

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
          <Path  d="M8 5.072a8 8 0 1 1 -3.995 7.213l-.005 -.285l.005 -.285a8 8 0 0 1 3.995 -6.643z" />
        </G>
      </Svg>
    );
  }

