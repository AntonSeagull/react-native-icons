

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoCashSharp = (props: IconProps) => {

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
          <Circle  cx="256" cy="208" r="64" />
          <Path  d="M480,176a96.11,96.11,0,0,1-96-96V64H128V80a96.11,96.11,0,0,1-96,96H16v64H32a96.11,96.11,0,0,1,96,96v16H384V336a96.11,96.11,0,0,1,96-96h16V176ZM256,304a96,96,0,1,1,96-96A96.11,96.11,0,0,1,256,304Z" />
          <Path  d="M96,80V64H16v80H32A64.07,64.07,0,0,0,96,80Z" />
          <Path  d="M32,272H16v80H96V336A64.07,64.07,0,0,0,32,272Z" />
          <Path  d="M480,144h16V64H416V80A64.07,64.07,0,0,0,480,144Z" />
          <Path  d="M416,336v16h80V272H480A64.07,64.07,0,0,0,416,336Z" />
        </G>
      </Svg>
    );
  }

