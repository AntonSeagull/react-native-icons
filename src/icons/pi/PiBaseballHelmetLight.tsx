

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBaseballHelmetLight = (props: IconProps) => {

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
          <Path  d="M88,130a26,26,0,1,0,26,26A26,26,0,0,0,88,130Zm0,40a14,14,0,1,1,14-14A14,14,0,0,1,88,170Zm160-48H221.83A102,102,0,0,0,18,128v24a70.08,70.08,0,0,0,70,70h40a70.08,70.08,0,0,0,70-70V134h50a6,6,0,0,0,0-12Zm-62,30a58.07,58.07,0,0,1-58,58h-.85A70,70,0,0,0,158,152V134h28Zm-34-30a6,6,0,0,0-6,6v24a58,58,0,0,1-116,0V128a90,90,0,0,1,179.8-6Z" />
        </G>
      </Svg>
    );
  }

