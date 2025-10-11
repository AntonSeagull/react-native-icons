

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowLineUpLight = (props: IconProps) => {

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
          <Path d="M204.24,139.76a6,6,0,1,1-8.48,8.48L134,86.49V224a6,6,0,0,1-12,0V86.49L60.24,148.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0ZM216,34H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z" />
        </G>
      </Svg>
    );
  }

