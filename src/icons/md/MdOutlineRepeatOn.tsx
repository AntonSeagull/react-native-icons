

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineRepeatOn = (props: IconProps) => {

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
          <Path  d="M21,1H3C1.9,1,1,1.9,1,3v18c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V3C23,1.9,22.1,1,21,1z M19,19H6.83l1.58,1.58L7,22l-4-4 l4-4l1.41,1.42L6.83,17H17v-4h2V19z M17,10l-1.41-1.42L17.17,7H7v4H5V5h12.17l-1.58-1.58L17,2l4,4L17,10z" />
        </G>
      </Svg>
    );
  }

