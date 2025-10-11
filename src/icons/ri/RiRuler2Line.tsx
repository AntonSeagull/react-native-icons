

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiRuler2Line = (props: IconProps) => {

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
          <Path  d="M17 19H19V14H10V5H5V7H7V9H5V11H8V13H5V15H7V17H5V19H7V17H9V19H11V16H13V19H15V17H17V19ZM12 12H20C20.5523 12 21 12.4477 21 13V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H11C11.5523 3 12 3.44772 12 4V12Z" />
        </G>
      </Svg>
    );
  }

