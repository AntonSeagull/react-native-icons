

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgSwap = (props: IconProps) => {

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
          <Path d="M16 13V11.5H10V9.5H16V8L19 10.5L16 13Z" fill="currentColor" />
          <Path d="M8 17V15.5H14V13.5H8V12L5 14.5L8 17Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

