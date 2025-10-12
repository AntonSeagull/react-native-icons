

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiServer = (props: IconProps) => {

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
          <Circle  cx="5.563" cy="7.53" r="0.5" />
          <Circle  cx="7.563" cy="7.53" r="0.5" />
          <Circle  cx="5.563" cy="16.47" r="0.5" />
          <Circle  cx="7.563" cy="16.47" r="0.5" />
          <Path  d="M20.437,11H3.563a1.5,1.5,0,0,1-1.5-1.5V5.565a1.5,1.5,0,0,1,1.5-1.5H20.437a1.5,1.5,0,0,1,1.5,1.5v3.93A1.5,1.5,0,0,1,20.437,11ZM3.563,5.065a.5.5,0,0,0-.5.5v3.93a.5.5,0,0,0,.5.5H20.437a.5.5,0,0,0,.5-.5V5.565a.5.5,0,0,0-.5-.5Z" />
          <Path  d="M20.437,19.935H3.563a1.5,1.5,0,0,1-1.5-1.5v-3.93a1.5,1.5,0,0,1,1.5-1.5H20.437a1.5,1.5,0,0,1,1.5,1.5v3.93A1.5,1.5,0,0,1,20.437,19.935ZM3.563,14.005a.5.5,0,0,0-.5.5v3.93a.5.5,0,0,0,.5.5H20.437a.5.5,0,0,0,.5-.5v-3.93a.5.5,0,0,0-.5-.5Z" />
          <Path  d="M13.452,8.03a.5.5,0,0,1,0-1h5a.5.5,0,0,1,0,1Z" />
          <Path  d="M13.452,16.97a.5.5,0,0,1,0-1h5a.5.5,0,0,1,0,1Z" />
        </G>
      </Svg>
    );
  }

