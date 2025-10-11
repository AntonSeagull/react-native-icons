

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiHourglassSimpleBold = (props: IconProps) => {

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
          <Path  d="M214,193.68,145.35,128,214,62.32l.18-.18A20,20,0,0,0,200,28H56A20,20,0,0,0,41.87,62.14l.18.18L110.65,128l-68.6,65.68-.18.18A20,20,0,0,0,56,228H200a20,20,0,0,0,14.14-34.14ZM190,52l-62,59.39L66,52ZM66,204l62-59.39L190,204Z" />
        </G>
      </Svg>
    );
  }

