

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTableColumnsSplit = (props: IconProps) => {

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
          <Path  d="M14 14v2" />
          <Path  d="M14 20v2" />
          <Path  d="M14 2v2" />
          <Path  d="M14 8v2" />
          <Path  d="M2 15h8" />
          <Path  d="M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2" />
          <Path  d="M2 9h8" />
          <Path  d="M22 15h-4" />
          <Path  d="M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" />
          <Path  d="M22 9h-4" />
          <Path  d="M5 3v18" />
        </G>
      </Svg>
    );
  }

