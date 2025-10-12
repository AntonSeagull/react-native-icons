

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineNetworkWifi2Bar = (props: IconProps) => {

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
          <Path  d="M12,4C7.31,4,3.07,5.9,0,8.98L12,21L24,8.98C20.93,5.9,16.69,4,12,4z M16.78,13.38C15.4,12.5,13.76,12,12,12 c-1.76,0-3.4,0.5-4.78,1.38l-4.3-4.3C5.51,7.08,8.67,6,12,6s6.49,1.08,9.08,3.07L16.78,13.38z" />
        </G>
      </Svg>
    );
  }

