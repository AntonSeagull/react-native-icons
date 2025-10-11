

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCaptureOff = (props: IconProps) => {

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
          <Path  d="M4 16v2a2 2 0 0 0 2 2h2" />
          <Path  d="M16 4h2a2 2 0 0 1 2 2v2" />
          <Path  d="M16 20h2c.554 0 1.055 -.225 1.417 -.589" />
          <Path  d="M9.87 9.887a3 3 0 0 0 4.255 4.23m.58 -3.416a3.012 3.012 0 0 0 -1.4 -1.403" />
          <Path  d="M4 8v-2c0 -.548 .22 -1.044 .577 -1.405" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

