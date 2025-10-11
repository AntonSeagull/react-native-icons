

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiDesktopMouse2 = (props: IconProps) => {

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
          <Path  d="M13.437,21.938H10.563a6.508,6.508,0,0,1-6.5-6.5V8.562a6.508,6.508,0,0,1,6.5-6.5h2.874a6.508,6.508,0,0,1,6.5,6.5v6.876A6.508,6.508,0,0,1,13.437,21.938ZM10.563,3.062a5.506,5.506,0,0,0-5.5,5.5v6.876a5.506,5.506,0,0,0,5.5,5.5h2.874a5.506,5.506,0,0,0,5.5-5.5V8.562a5.506,5.506,0,0,0-5.5-5.5Z" />
          <Path  d="M11.5,6.541v4a.5.5,0,0,0,1,0v-4a.5.5,0,0,0-1,0Z" />
        </G>
      </Svg>
    );
  }

