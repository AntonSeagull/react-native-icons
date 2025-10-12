

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineLtePlusMobiledata = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          
          <Path  d="M3,14h3v2H1V8h2V14z M5,10h2v6h2v-6h2V8H5V10z M12,16h5v-2h-3v-1h3v-2h-3v-1h3V8h-5V16z M24,11h-2V9h-2v2h-2v2h2v2h2v-2h2 V11z" />
        </G>
      </Svg>
    );
  }

