

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowElbowLeftFill = (props: IconProps) => {

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
          <Path d="M237.66,101.66l-96,96a8,8,0,0,1-11.32,0L60,127.31,29.66,157.66A8,8,0,0,1,16,152V80a8,8,0,0,1,8-8H96a8,8,0,0,1,5.66,13.66L71.31,116,136,180.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" />
        </G>
      </Svg>
    );
  }

