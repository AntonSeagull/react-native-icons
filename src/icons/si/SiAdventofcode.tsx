

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiAdventofcode = (props: IconProps) => {

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
          <Path  d="m14.05 13.236 6.498 9.606L18.91 24l-6.905-9.47L5.1 24l-1.637-1.158 6.498-9.606L.553 9.22l.615-1.69 9.596 3.463L11.087 0h1.826l.323 10.993 9.596-3.462.615 1.69-9.387 4.015z" />
        </G>
      </Svg>
    );
  }

