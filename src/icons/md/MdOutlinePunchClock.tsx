

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlinePunchClock = (props: IconProps) => {

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
          <Path  d="M19,6h-1V1H6v5H5C3.9,6,3,6.9,3,8v12c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V8C21,6.9,20.1,6,19,6z M8,3h8v3H8V3z M19,20H5V8 h14V20z" />
          <Path  d="M12,9c-2.76,0-5,2.24-5,5s2.24,5,5,5c2.76,0,5-2.24,5-5S14.76,9,12,9z M12,17.5c-1.93,0-3.5-1.57-3.5-3.5 s1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5S13.93,17.5,12,17.5z" />
        </G>
      </Svg>
    );
  }

