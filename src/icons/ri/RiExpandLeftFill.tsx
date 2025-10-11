

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiExpandLeftFill = (props: IconProps) => {

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
          <Path  d="M9.99994 4.99982V10.9998L16.0002 11.0002L16.0002 13.0002L9.99994 12.9998V18.9998L2.99994 12L9.99994 4.99982ZM18.0001 19V4.99999H20.0001V19H18.0001Z" />
        </G>
      </Svg>
    );
  }

