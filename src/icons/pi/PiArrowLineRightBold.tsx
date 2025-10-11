

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowLineRightBold = (props: IconProps) => {

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
          <Path d="M184.49,119.51a12,12,0,0,1,0,17l-72,72a12,12,0,0,1-17-17L147,140H32a12,12,0,0,1,0-24H147L95.51,64.49a12,12,0,0,1,17-17ZM216,28a12,12,0,0,0-12,12V216a12,12,0,0,0,24,0V40A12,12,0,0,0,216,28Z" />
        </G>
      </Svg>
    );
  }

