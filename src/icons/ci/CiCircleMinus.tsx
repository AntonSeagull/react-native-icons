

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiCircleMinus = (props: IconProps) => {

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
          <Path  d="M15,11.5h0a.5.5,0,0,1,0,1H9a.5.5,0,0,1,0-1Z" />
          <Path  d="M12,21.934A9.933,9.933,0,1,1,21.932,12,9.945,9.945,0,0,1,12,21.934ZM12,3.068A8.933,8.933,0,1,0,20.932,12,8.944,8.944,0,0,0,12,3.068Z" />
        </G>
      </Svg>
    );
  }

