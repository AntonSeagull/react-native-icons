

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiGreaterThanOrEqualThin = (props: IconProps) => {

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
          <Path  d="M54.62,156.25,196.43,104,54.62,51.75a4,4,0,0,1,2.76-7.5l152,56a4,4,0,0,1,0,7.5l-152,56A3.91,3.91,0,0,1,56,164a4,4,0,0,1-1.38-7.75ZM208,196H56a4,4,0,0,0,0,8H208a4,4,0,0,0,0-8Z" />
        </G>
      </Svg>
    );
  }

