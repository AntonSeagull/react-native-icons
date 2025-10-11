

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrCli = (props: IconProps) => {

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
          <Path  fill="none" d="M1,1 L23,1 L23,23 L1,23 L1,1 Z M1,5 L23,5 M5,1 L5,5 M11,16 L19,16 M5,10 L8,13 L5,16" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

