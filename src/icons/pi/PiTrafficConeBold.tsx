

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTrafficConeBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M232,204H216.53L157.2,33.43A20,20,0,0,0,138.31,20H117.69A20,20,0,0,0,98.8,33.43L39.47,204H24a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24ZM98.27,108h59.46l13.91,40H84.36Zm22.26-64h14.94l13.91,40H106.62ZM76,172H180l11.13,32H64.88Z" />
        </G>
      </Svg>
    );
  }

