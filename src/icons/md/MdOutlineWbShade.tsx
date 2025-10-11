

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineWbShade = (props: IconProps) => {

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
          <Path  d="M14,12v2.5l5.5,5.5H22L14,12z M14,20h3l-3-3V20z M8,4l-6,6h2v10h8V10h2L8,4z M9,14H7v-4h2V14z" />
        </G>
      </Svg>
    );
  }

