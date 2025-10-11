

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSolidSprayCan = (props: IconProps) => {

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
          <Path  d="M13.003 3h2v2h-2zM16 3h2v2h-2zm0 3h2v2h-2zm3-3h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2zM4.012 12v9a1 1 0 0 0 1 1H13a1 1 0 0 0 1-1v-9a4 4 0 0 0-4-4H8.012a4 4 0 0 0-4 4zM7.003 2h4v4h-4z" />
        </G>
      </Svg>
    );
  }

