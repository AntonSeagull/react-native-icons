

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineSolarPower = (props: IconProps) => {

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
          <Path  d="M20,12H4L2,22h20L20,12z M18.36,14l0.4,2H13v-2H18.36z M11,14v2H5.24l0.4-2H11z M4.84,18H11v2H4.44L4.84,18z M13,20v-2 h6.16l0.4,2H13z" />
          <Path  d="M12,7c2.76,0,5-2.24,5-5h-2c0,1.65-1.35,3-3,3S9,3.65,9,2H7C7,4.76,9.24,7,12,7z" />
        </G>
      </Svg>
    );
  }

