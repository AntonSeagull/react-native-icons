

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBrackets = (props: IconProps) => {

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
          <Path  d="M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3" />
          <Path  d="M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3" />
        </G>
      </Svg>
    );
  }

