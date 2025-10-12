

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdPriceCheck = (props: IconProps) => {

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
          
          <Path  d="M12,13V9c0-0.55-0.45-1-1-1H7V6h5V4H9.5V3h-2v1H6C5.45,4,5,4.45,5,5v4c0,0.55,0.45,1,1,1h4v2H5v2h2.5v1h2v-1H11 C11.55,14,12,13.55,12,13z" />
        </G>
      </Svg>
    );
  }

