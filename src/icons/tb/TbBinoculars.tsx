

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBinoculars = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M7 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M17 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M16.346 9.17l-.729 -1.261c-.16 -.248 -1.056 -.203 -1.117 .091l-.177 1.38" />
          <Path d="M19.761 14.813l-2.84 -5.133c-.189 -.31 -.592 -.68 -1.421 -.68c-.828 0 -1.5 .448 -1.5 1v6" />
          <Path d="M7.654 9.17l.729 -1.261c.16 -.249 1.056 -.203 1.117 .091l.177 1.38" />
          <Path d="M4.239 14.813l2.84 -5.133c.189 -.31 .592 -.68 1.421 -.68c.828 0 1.5 .448 1.5 1v6" />
        </G>
      </Svg>
    );
  }

