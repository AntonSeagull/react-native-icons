

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineDashboardCustomize = (props: IconProps) => {

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
          <Path  d="M0,0h24v24H0V0z" fill="none" />
          <Path  d="M3,11h8V3H3V11z M5,5h4v4H5V5z" />
          <Path  d="M13,3v8h8V3H13z M19,9h-4V5h4V9z" />
          <Path  d="M3,21h8v-8H3V21z M5,15h4v4H5V15z" />
        </G>
      </Svg>
    );
  }

