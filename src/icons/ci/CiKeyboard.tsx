

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiKeyboard = (props: IconProps) => {

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
          <Path  d="M19.437,18.5H4.562a2.5,2.5,0,0,1-2.5-2.5V8a2.5,2.5,0,0,1,2.5-2.5H19.437a2.5,2.5,0,0,1,2.5,2.5v8A2.5,2.5,0,0,1,19.437,18.5ZM4.562,6.5A1.5,1.5,0,0,0,3.062,8v8a1.5,1.5,0,0,0,1.5,1.5H19.437a1.5,1.5,0,0,0,1.5-1.5V8a1.5,1.5,0,0,0-1.5-1.5Z" />
          <Path  d="M5.548,16.5h12.9a.5.5,0,0,0,0-1H5.548a.5.5,0,0,0,0,1Z" />
        </G>
      </Svg>
    );
  }

