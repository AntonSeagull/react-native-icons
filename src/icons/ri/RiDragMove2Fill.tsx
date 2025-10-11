

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiDragMove2Fill = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M18 11V8L22 12L18 16V13H13V18H16L12 22L8 18H11V13H6V16L2 12L6 8V11H11V6H8L12 2L16 6H13V11H18Z" />
        </G>
      </Svg>
    );
  }

