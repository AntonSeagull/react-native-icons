

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiDirectionAlt = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M9 6h4.695l1.938-2.563-1.946-2.437h-4.687v-1h-1v1h-6v5h6v2h-4.687l-1.946 2.437 1.938 2.563h4.695v4h1v-4h6v-5h-6v-2zM3 2h10.206l1.161 1.454-1.169 1.546h-10.198v-3zM14 12h-10.198l-1.169-1.546 1.161-1.454h10.206v3z" />
        </G>
      </Svg>
    );
  }

