

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgLayoutGrid = (props: IconProps) => {

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
          <Path  d="M11 7H7V11H11V7Z" fill="currentColor" />
          <Path  d="M11 13H7V17H11V13Z" fill="currentColor" />
          <Path  d="M13 13H17V17H13V13Z" fill="currentColor" />
          <Path  d="M17 7H13V11H17V7Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

