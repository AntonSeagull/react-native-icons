

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuScanBarcode = (props: IconProps) => {

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
          <Path  d="M3 7V5a2 2 0 0 1 2-2h2" />
          <Path  d="M17 3h2a2 2 0 0 1 2 2v2" />
          <Path  d="M21 17v2a2 2 0 0 1-2 2h-2" />
          <Path  d="M7 21H5a2 2 0 0 1-2-2v-2" />
          <Path  d="M8 7v10" />
          <Path  d="M12 7v10" />
          <Path  d="M17 7v10" />
        </G>
      </Svg>
    );
  }

