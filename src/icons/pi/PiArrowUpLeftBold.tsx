

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowUpLeftBold = (props: IconProps) => {

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
          <Path d="M200.49,200.49a12,12,0,0,1-17,0L76,93v75a12,12,0,0,1-24,0V64A12,12,0,0,1,64,52H168a12,12,0,0,1,0,24H93L200.49,183.51A12,12,0,0,1,200.49,200.49Z" />
        </G>
      </Svg>
    );
  }

