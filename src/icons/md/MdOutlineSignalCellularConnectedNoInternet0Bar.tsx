

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineSignalCellularConnectedNoInternet0Bar = (props: IconProps) => {

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
          <Path  d="M20,18h2v-8h-2V18z M20,22h2v-2h-2V22z M18,20v2H2L22,2v6h-2V6.83L6.83,20H18z" />
        </G>
      </Svg>
    );
  }

