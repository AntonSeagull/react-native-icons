

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdZoomOutMap = (props: IconProps) => {

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
          <Path  d="M15,3l2.3,2.3l-2.89,2.87l1.42,1.42L18.7,6.7L21,9V3H15z M3,9l2.3-2.3l2.87,2.89l1.42-1.42L6.7,5.3L9,3H3V9z M9,21 l-2.3-2.3l2.89-2.87l-1.42-1.42L5.3,17.3L3,15v6H9z M21,15l-2.3,2.3l-2.87-2.89l-1.42,1.42l2.89,2.87L15,21h6V15z" />
        </G>
      </Svg>
    );
  }

