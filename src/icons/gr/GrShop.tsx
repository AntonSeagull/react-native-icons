

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrShop = (props: IconProps) => {

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
          <Path  fill="none" d="M4,7 L20,7 L20,23 L4,23 L4,7 Z M8,9 L8,5 C8,2.790861 9.79535615,1 12,1 L12,1 C14.209139,1 16,2.79535615 16,5 L16,9" strokeLinecap="round" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

