

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPersonSimpleTaiChiBold = (props: IconProps) => {

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
          <Path  d="M128,84A36,36,0,1,0,92,48,36,36,0,0,0,128,84Zm0-48a12,12,0,1,1-12,12A12,12,0,0,1,128,36Zm100,72a12,12,0,0,1-12,12H140v16.09L188.73,157A12,12,0,0,1,196,168v48a12,12,0,0,1-24,0V175.91l-41.67-17.86L56,224.92A12,12,0,0,1,40,207.08l76-68.42V120H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,108Z" />
        </G>
      </Svg>
    );
  }

