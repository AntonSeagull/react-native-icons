

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiFridgeFill = (props: IconProps) => {

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
          <Path  d="M19.998 12V22C19.998 22.5523 19.5503 23 18.998 23H4.99805C4.44576 23 3.99805 22.5523 3.99805 22V12H19.998ZM8.99805 14H6.99805V19H8.99805V14ZM18.998 1C19.5503 1 19.998 1.44772 19.998 2V10H3.99805V2C3.99805 1.44772 4.44576 1 4.99805 1H18.998ZM8.99805 4H6.99805V8H8.99805V4Z" />
        </G>
      </Svg>
    );
  }

