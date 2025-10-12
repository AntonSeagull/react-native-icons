

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiBitcoin = (props: IconProps) => {

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
          <Path  d="M12,21.934A9.934,9.934,0,1,1,21.934,12,9.945,9.945,0,0,1,12,21.934ZM12,3.066A8.934,8.934,0,1,0,20.934,12,8.944,8.944,0,0,0,12,3.066Z" />
          <Path  d="M14.28,11.78A1.994,1.994,0,0,0,12.75,8.5H12.5V7.47A.489.489,0,0,0,12,7a.483.483,0,0,0-.5.47V8.5H10.25a1,1,0,0,0-1,1v5a1,1,0,0,0,1,1H11.5v1.03A.483.483,0,0,0,12,17a.489.489,0,0,0,.5-.47V15.5h.75a2.006,2.006,0,0,0,2-2A2.033,2.033,0,0,0,14.28,11.78ZM10.25,9.5h2.5a1,1,0,0,1,0,2h-2.5Zm3,5h-3v-2h3a1,1,0,0,1,0,2Z" />
        </G>
      </Svg>
    );
  }

