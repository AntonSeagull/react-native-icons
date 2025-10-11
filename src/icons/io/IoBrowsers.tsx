

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBrowsers = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M416,48H96a64,64,0,0,0-64,64V400a64,64,0,0,0,64,64H416a64,64,0,0,0,64-64V112A64,64,0,0,0,416,48Zm24,96H72a8,8,0,0,1-8-8V112A32.09,32.09,0,0,1,96,80H416a32.09,32.09,0,0,1,32,32v24A8,8,0,0,1,440,144Z" />
        </G>
      </Svg>
    );
  }

