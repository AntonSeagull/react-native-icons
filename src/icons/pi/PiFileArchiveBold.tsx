

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFileArchiveBold = (props: IconProps) => {

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
          <Path  d="M216.49,79.51l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.51ZM183,80H160V57ZM116,212V192h8a12,12,0,0,0,0-24h-8V152h8a12,12,0,0,0,0-24h-8V116a12,12,0,0,0-24,0v12H84a12,12,0,0,0,0,24h8v16H84a12,12,0,0,0,0,24h8v20H60V44h76V92a12,12,0,0,0,12,12h48V212Z" />
        </G>
      </Svg>
    );
  }

