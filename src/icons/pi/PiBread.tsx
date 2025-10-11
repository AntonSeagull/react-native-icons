

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBread = (props: IconProps) => {

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
          <Path  d="M240,80a40,40,0,0,0-40-40H48a40,40,0,0,0-16,76.65V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V116.65A40.06,40.06,0,0,0,240,80ZM48,120a8,8,0,0,0,0-16,24,24,0,0,1,0-48h96a24,24,0,0,1,0,48,8,8,0,0,0,0,16v80H48Zm152-16a8,8,0,0,0,0,16v80H160V116.65A40,40,0,0,0,176,56h24a24,24,0,0,1,0,48Z" />
        </G>
      </Svg>
    );
  }

