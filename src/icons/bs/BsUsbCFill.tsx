

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BsUsbCFill = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M3 5a3 3 0 0 0 0 6h10a3 3 0 1 0 0-6zm.5 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1" />
        </G>
      </Svg>
    );
  }

