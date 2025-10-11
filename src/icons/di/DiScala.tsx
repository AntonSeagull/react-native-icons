

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const DiScala = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M8.573 7.307c0 0 14.853-1.485 14.853-3.961v5.941c0 0 0 2.476-14.853 3.961zM8.636 15.229c0 0 14.853-1.485 14.853-3.961v5.941c0 0 0 2.476-14.853 3.961zM8.636 23.151c0 0 14.853-1.485 14.853-3.961v5.941c0 0 0 2.476-14.853 3.961z" fill="#444444" />
        </G>
      </Svg>
    );
  }

