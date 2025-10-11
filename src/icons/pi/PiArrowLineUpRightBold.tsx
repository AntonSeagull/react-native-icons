

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowLineUpRightBold = (props: IconProps) => {

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
          <Path d="M228,216a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,216ZM80,180a12,12,0,0,0,8.49-3.51L180,85v67a12,12,0,0,0,24,0V56a12,12,0,0,0-12-12H96a12,12,0,0,0,0,24h67L71.51,159.51A12,12,0,0,0,80,180Z" />
        </G>
      </Svg>
    );
  }

