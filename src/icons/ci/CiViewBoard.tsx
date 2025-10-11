

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiViewBoard = (props: IconProps) => {

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
          <Path  d="M18.437,20.936H5.563a2.5,2.5,0,0,1-2.5-2.5V5.562a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.436A2.5,2.5,0,0,1,18.437,20.936ZM5.563,4.062a1.5,1.5,0,0,0-1.5,1.5V18.436a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.562a1.5,1.5,0,0,0-1.5-1.5Z" />
          <Path  d="M12.5,14.544a.5.5,0,0,1-1,0v-8h0a.5.5,0,0,1,1,0Z" />
          <Path  d="M16.717,12.453a.5.5,0,0,1-1,0V6.544h0a.5.5,0,0,1,1,0Z" />
          <Path  d="M8.28,6.544a.5.5,0,0,0-1,0h0v4a.5.5,0,0,0,1,0Z" />
        </G>
      </Svg>
    );
  }

