

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiLessThanOrEqualThin = (props: IconProps) => {

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
          <Path d="M44,104a4,4,0,0,1,2.62-3.75l152-56a4,4,0,1,1,2.76,7.5L59.57,104l141.81,52.25A4,4,0,0,1,200,164a3.91,3.91,0,0,1-1.38-.25l-152-56A4,4,0,0,1,44,104Zm156,92H48a4,4,0,0,0,0,8H200a4,4,0,0,0,0-8Z" />
        </G>
      </Svg>
    );
  }

