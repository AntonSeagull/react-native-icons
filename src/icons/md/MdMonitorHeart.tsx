

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdMonitorHeart = (props: IconProps) => {

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
          <Path  d="M15.11,12.45L14,10.24l-3.11,6.21C10.73,16.79,10.38,17,10,17s-0.73-0.21-0.89-0.55L7.38,13H2v5c0,1.1,0.9,2,2,2h16 c1.1,0,2-0.9,2-2v-5h-6C15.62,13,15.27,12.79,15.11,12.45z" />
          <Path  d="M20,4H4C2.9,4,2,4.9,2,6v5h6c0.38,0,0.73,0.21,0.89,0.55L10,13.76l3.11-6.21c0.34-0.68,1.45-0.68,1.79,0L16.62,11H22V6 C22,4.9,21.1,4,20,4z" />
        </G>
      </Svg>
    );
  }

