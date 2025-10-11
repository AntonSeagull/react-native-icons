

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowLineUpThin = (props: IconProps) => {

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
          <Path  d="M202.83,141.17a4,4,0,0,1-5.66,5.66L132,81.66V224a4,4,0,0,1-8,0V81.66L58.83,146.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0ZM216,36H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z" />
        </G>
      </Svg>
    );
  }

