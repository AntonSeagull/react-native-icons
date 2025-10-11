

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdShelves = (props: IconProps) => {

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
          <Path  d="M19 1v2H5V1H3v22h2v-2h14v2h2V1h-2zm0 4v6h-6V7H7v4H5V5h14zm-2 14v-4h-6v4H5v-6h14v6h-2z" />
        </G>
      </Svg>
    );
  }

