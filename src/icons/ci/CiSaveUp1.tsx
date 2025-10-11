

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiSaveUp1 = (props: IconProps) => {

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
          <Path  d="M17.617,6.374a7.946,7.946,0,0,1-1.748,12.569A8.028,8.028,0,0,1,4.283,13.9,8.029,8.029,0,0,1,6.378,6.382c.451-.46-.256-1.168-.707-.707a8.946,8.946,0,0,0,9.756,14.587,8.946,8.946,0,0,0,2.9-14.595c-.451-.46-1.158.247-.707.707Z" />
          <Path  d="M8.645,6.213l3-3a.5.5,0,0,1,.35-.15.508.508,0,0,1,.36.15l3,3a.5.5,0,0,1-.71.71l-2.14-2.14v8.47a.508.508,0,0,1-.5.5.5.5,0,0,1-.5-.5V4.763l-2.15,2.16a.5.5,0,0,1-.71-.71Z" />
        </G>
      </Svg>
    );
  }

