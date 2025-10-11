

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiChessRook = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M406 484.7H106v-60h300v60zm-56.67-330.83h-50.05V91.3h-82.39v62.57h-54.22V91.3h-54.23v113.67h295.12V91.3h-54.23v62.57zm23.35 67.23H139.32v187.6h233.36V221.1z" fill="#000" />
        </G>
      </Svg>
    );
  }

