

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowDownLeftDuotone = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M168,192H64V88Z" />
          <Path d="M197.66,58.34a8,8,0,0,0-11.32,0L116,128.69,69.66,82.34A8,8,0,0,0,56,88V192a8,8,0,0,0,8,8H168a8,8,0,0,0,5.66-13.66L127.31,140l70.35-70.34A8,8,0,0,0,197.66,58.34ZM72,184V107.31l38.34,38.34h0L148.69,184Z" />
        </G>
      </Svg>
    );
  }

