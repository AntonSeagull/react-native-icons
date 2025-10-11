

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowsOutLineHorizontalLight = (props: IconProps) => {

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
          <Path  d="M134,40V216a6,6,0,0,1-12,0V40a6,6,0,0,1,12,0ZM96,122H30.49l21.75-21.76a6,6,0,0,0-8.48-8.48l-32,32a6,6,0,0,0,0,8.48l32,32a6,6,0,0,0,8.48-8.48L30.49,134H96a6,6,0,0,0,0-12Zm148.24,1.76-32-32a6,6,0,0,0-8.48,8.48L225.51,122H160a6,6,0,0,0,0,12h65.51l-21.75,21.76a6,6,0,1,0,8.48,8.48l32-32A6,6,0,0,0,244.24,123.76Z" />
        </G>
      </Svg>
    );
  }

