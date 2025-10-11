

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiInstagram = (props: IconProps) => {

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
          <Path  d="M18.437,20.937H5.563a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.437,20.937ZM5.563,4.063a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z" />
          <Path  d="M12,16.594A4.595,4.595,0,1,1,16.6,12,4.6,4.6,0,0,1,12,16.594ZM12,8.4A3.595,3.595,0,1,0,15.6,12,3.6,3.6,0,0,0,12,8.4Z" />
        </G>
      </Svg>
    );
  }

