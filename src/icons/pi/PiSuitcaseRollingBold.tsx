

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSuitcaseRollingBold = (props: IconProps) => {

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
          <Path  d="M116,96v80a12,12,0,0,1-24,0V96a12,12,0,0,1,24,0Zm24,0v80a12,12,0,0,0,24,0V96a12,12,0,0,0-24,0Zm72-32V208a20,20,0,0,1-20,20H180v12a12,12,0,0,1-24,0V228H100v12a12,12,0,0,1-24,0V228H64a20,20,0,0,1-20-20V64A20,20,0,0,1,64,44H84V28A28,28,0,0,1,112,0h32a28,28,0,0,1,28,28V44h20A20,20,0,0,1,212,64ZM108,44h40V28a4,4,0,0,0-4-4H112a4,4,0,0,0-4,4Zm80,24H68V204H188Z" />
        </G>
      </Svg>
    );
  }

