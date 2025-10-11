

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiExpandRightFill = (props: IconProps) => {

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
          <Path  d="M13.9998 4.99982L21.0001 11.9999L13.9998 18.9998V13H7.9998L7.99978 11H13.9998V4.99982ZM3.99985 18.9998L3.99985 4.99982H5.99985V18.9998H3.99985Z" />
        </G>
      </Svg>
    );
  }

