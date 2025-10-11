

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiSliderVertical = (props: IconProps) => {

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
          <Path  d="M8.5,5.13V2.55a.5.5,0,0,0-.5-.5.508.508,0,0,0-.5.5V5.13A2,2,0,0,0,6,7.06v1A2,2,0,0,0,7.5,9.99V21.45a.5.5,0,0,0,1,0V9.99A2,2,0,0,0,10,8.06v-1A2,2,0,0,0,8.5,5.13ZM9,8.06a1,1,0,1,1-2,0v-1a1.006,1.006,0,0,1,.98-1H8a1,1,0,0,1,1,1Z" />
          <Path  d="M16.5,14.01V2.55a.5.5,0,0,0-1,0V14.01A2,2,0,0,0,14,15.94v1a2,2,0,0,0,1.5,1.93v2.58a.5.5,0,0,0,.5.5.508.508,0,0,0,.5-.5V18.87A2,2,0,0,0,18,16.94v-1A2,2,0,0,0,16.5,14.01Zm.5,2.93a1.006,1.006,0,0,1-.98,1H16a1,1,0,0,1-1-1v-1a1,1,0,1,1,2,0Z" />
        </G>
      </Svg>
    );
  }

