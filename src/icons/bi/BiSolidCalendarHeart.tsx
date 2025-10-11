

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSolidCalendarHeart = (props: IconProps) => {

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
          <Path  d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-3.648 11.711L12.002 19l-3.349-3.289a2.129 2.129 0 0 1 0-3.069 2.224 2.224 0 0 1 3.125 0l.224.219.224-.219a2.225 2.225 0 0 1 3.126 0 2.129 2.129 0 0 1 0 3.069zM19 9H5V7h14v2z" />
        </G>
      </Svg>
    );
  }

