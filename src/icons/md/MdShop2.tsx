

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdShop2 = (props: IconProps) => {

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
          <Path  d="M3,9H1v11c0,1.11,0.89,2,2,2h16v-2H3V9z" />
          <Path  d="M18,5V3c0-1.11-0.89-2-2-2h-4c-1.11,0-2,0.89-2,2v2H5v11c0,1.11,0.89,2,2,2h14c1.11,0,2-0.89,2-2V5H18z M12,3h4v2h-4V3z M12,15V8l5.5,3.5L12,15z" />
        </G>
      </Svg>
    );
  }

