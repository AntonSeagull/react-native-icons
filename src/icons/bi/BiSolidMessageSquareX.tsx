

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSolidMessageSquareX = (props: IconProps) => {

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
          <Path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm.706 13.293-1.414 1.414L12 13.415l-3.292 3.292-1.414-1.414 3.292-3.292-3.292-3.292 1.414-1.414L12 10.587l3.292-3.292 1.414 1.414-3.292 3.292 3.292 3.292z" />
        </G>
      </Svg>
    );
  }

