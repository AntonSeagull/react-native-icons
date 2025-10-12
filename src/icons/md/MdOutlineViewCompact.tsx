

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineViewCompact = (props: IconProps) => {

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
          <Path  d="M2,4v16h20V4H2z M6.5,18H4v-2.5h2.5V18z M6.5,13.25H4v-2.5h2.5V13.25z M6.5,8.5H4V6h2.5V8.5z M11,18H8.5v-2.5H11V18z M11,13.25H8.5v-2.5H11V13.25z M11,8.5H8.5V6H11V8.5z M15.5,18H13v-2.5h2.5V18z M15.5,13.25H13v-2.5h2.5V13.25z M15.5,8.5H13V6 h2.5V8.5z M20,18h-2.5v-2.5H20V18z M20,13.25h-2.5v-2.5H20V13.25z M20,8.5h-2.5V6H20V8.5z" />
        </G>
      </Svg>
    );
  }

